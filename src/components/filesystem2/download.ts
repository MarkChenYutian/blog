import { GetObjectCommand, GetObjectCommandInput, S3Client } from "@aws-sdk/client-s3";
import React, { Dispatch } from "react";

export interface AWSFileObject {
  LastModified?: Date | undefined;
  Key?: string | undefined;
  Size?: number | undefined;
  ETag?: string | undefined;
  StorageClass?: string | undefined;
  FileType: string;
};

export interface DownloadProgress {
  currSize: number;
  fullSize: number;
}

async function initializeStream(client: S3Client, bucketName: string, key: string, set_download: Dispatch<React.SetStateAction<DownloadProgress>>) {
  const queryCommand: GetObjectCommandInput = {
    Key: key, Bucket: bucketName
  };
  const command = new GetObjectCommand(queryCommand);
  const response = await client.send(command);
  const data = response.Body

  if (data === undefined) throw new Error("No response from AWS S3 Service");
  const reader = (data as ReadableStream).getReader();
  return new ReadableStream(
    {
      start(controller) {
        function push() {
          reader.read()
            .then(({ done, value }) => {
              if (done) {
                controller.close();
                return;
              }
              set_download((state) => {
                return {
                  currSize: state.currSize + (value as Uint8Array).length,
                  fullSize: state.fullSize
                }
              })
              controller.enqueue(value);
              push();
            }).catch((e) => {
              throw e;
            })
        }
        push();
      }
    }
  )
}

export async function downloadItem(client: S3Client, bucketName: string, file: AWSFileObject, set_download: Dispatch<React.SetStateAction<DownloadProgress>>) {
  if (file.Key === undefined) return;
  set_download((state) => {
    return {
      currSize: state.currSize,
      fullSize: state.fullSize + (file.Size ? file.Size : 0)
    }
  })

  let result: Uint8Array | undefined = undefined;
  result = await initializeStream(client, bucketName, file.Key, set_download)
    .then(
      stream => {
        return new Response(stream).arrayBuffer();
      }
    )
    .then(
      result => {
        return new Uint8Array(result);
      }
    ).catch(
      (e) => {
        throw new Error("Failed to download file!");
      }
    )

  set_download((state) => {
    return {
      currSize: state.currSize - (file.Size ? file.Size : 0),
      fullSize: state.fullSize - (file.Size ? file.Size : 0)
    }
  })

  if (result === undefined) throw new Error("Unable to load file!");
  const file_name = file.Key.split("/").pop();

  const blob = new Blob([result]);
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = file_name ? file_name : "download_file";
  link.click();
}
