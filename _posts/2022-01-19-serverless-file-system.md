---
layout: post
title: Serverless File System based on AWS S3
tags: ["Web", "React"]
category: ["Frontend"]
banner: 
    video: https://markdown-img-1304853431.file.myqcloud.com/20220518-files-video.mp4
    loop: true
    volume: 0
    opacity: 0.618
    background: "#000"
    height: "100vh"
    min_height: "38vh"
toc: true
---

This system is deployed on [My blog's file Sharing Page]({{site.baseurl}}/files.html) as a front-end application. The source code is also avalable in `React-S3-Viewer` Repo [here](https://github.com/MarkChenYutian/React-S3-viewer).

Reference Information:

* [Viewing Photo stored in S3 Buckets](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/s3-example-photos-view.html)
* [AWS SDK for JavaScript](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/welcome.html)
* [AWS Cognito Identity Pool](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/getting-started-browser.html#getting-started-browser-create-identity-pool)
* [SessionStorage - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage)

## Access AWS Resources through SDK

![Serverless-file-system](https://markdown-img-1304853431.file.myqcloud.com/20220119171645.jpg)

A user identity pool is created using AWS Cognito. Any user authenticated / unauthenticated join this identity pool will be automatically assigned with an AWS role. Then, we create a AWS SDK key corresponding to this identity pool. Anyone access AWS Service using SDK and given key will get an role called `Cognito_MyBlogFilesUnAuth_Role`.

<!--more-->


Using IAM, we can assign this role with permission to access some specific AWS Resource. In this case, we only allow users to access the S3 storage bucket `yutian-public` and allow them to `List` and `Get` objects from the bucket.

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": "s3:ListBucket",
            "Resource": "arn:aws:s3:::yutian-public"
        },
        {
            "Sid": "VisualEditor1",
            "Effect": "Allow",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::yutian-public/*"
        }
    ]
}
```

## Local Caching

Since 2022 May, the file sharing page is reconstructed using `React` and `Ant-design`. Two major improvements are implemented in this latest version:

1. The file directory will be cached in the `SessionStorage`. For each session, the client will only request once from the AWS. This can significantly reduce the #requests.

2. When downloading, files will be cached to the `IndexDB`. Therefore, unless the user reset the IndexDB or the file is updated, every file is guaranteed to be downloaded only once on each client.

### File List Cache

![File Structure saved in Session Storage](http://markdown-img-1304853431.cosgz.myqcloud.com/20220509205039.png)

When the page is first loaded, the client will request all objects in S3 storage bucket through `ListObjectV2` API. The result is a list of objects in the bucket.

There is no file structure in S3, all the "folders" are just key of object with `/` slashes between words. Therefore, we need to parse the result to rebuild a "file structure" back from plain list.

The file structure will then be stored into `SessionStorage`. Unless the user explicitly request for reload, the `ListObjectV2` API will not be called anymore in current session.

### File Content Cache

![image-20220509211227847](http://markdown-img-1304853431.cosgz.myqcloud.com/20220509211227.png)

On the other hand, we want to reduce the amount of data downloaded from the AWS to minimize cost. Therefore, we want to cache the files that users has downloaded previously.

We will need to use `IndexedDB` since the quota for session storage is very small (~1Mb per entry). IndexedDB is much more complicated to use than SessionStorage. Luckily, there's a third-party module called `idb-key-val` that allows us to use IndexDB in an extremely simple way.

```typescript
function set(key: string, val: any)

function get(key: string): Promise<any>
```

By converting `Uint8Array` to base64 string, we can store the file in client's cache and reduce the redundant request to AWS.

<mark>Yet, there is just **one more thing**</mark>

Suppose the file on S3 is updated to a newer version but the client is still caching the older version, how can the client know when to update/descard the cache?

We resolve this problem by storing the `ETag` field along with data. `ETag` is a string that reflects the change of file content (notice it's not necessarily MD5). When the key is requested, the program will also compare the `ETag` of requested resource and current cache. If they don't match, then a later version will overwrite the current cache.
