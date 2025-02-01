'use client';

import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import { ListObjectsV2Command, S3Client } from "@aws-sdk/client-s3";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";
import React from "react";
import { ImFileEmpty, ImFilePdf } from "react-icons/im";

import { AWSFileObject, downloadItem, DownloadProgress } from "@/components/filesystem2/download";


interface FileSystemProps {
  bucketName: string;
  region: string;
  identityPoolID: string;
}


const FileIcon: React.FC<{ fileType: string }> = ({ fileType }) => {
  switch (fileType) {
    case "pdf": return <ImFilePdf className="block" size={24} color="red" />;
    default: return <ImFileEmpty className="block" size={24} />;
  };
}

const FileSize: React.FC<{ size: number }> = ({ size }) => {
  const units = ["B", "KB", "MB", "GB", "TB"];
  let unitIndex = 0;
  while (size > 1024) {
    size /= 1024;
    unitIndex += 1;
  }
  return <span>{size.toFixed(1)} {units[unitIndex]}</span>;
}

const FileName: React.FC<{ name: string }> = ({ name }) => {
  const components = name.split("/");
  const file_name = components.pop();
  components.push("");
  return <p><span className="font-light text-slate-500">{components.join("/")}</span><span>{file_name}</span></p>;
}


const FileSystemApp: React.FC<FileSystemProps> = (props) => {
  const { bucketName, region, identityPoolID } = props;
  const [files, setFiles] = React.useState<AWSFileObject[]>([]);
  const [visibleFiles, setVisibleFiles] = React.useState<AWSFileObject[]>([]);
  const [downloadProgress, setDownloadProgress] = React.useState<DownloadProgress>({ currSize: 0, fullSize: 0 });

  const [searchString, setSearchString] = React.useState("");
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(event.target.value);
  };

  const s3Client = React.useMemo(() => {
    const client = new S3Client({
      region,
      credentials: fromCognitoIdentityPool({
        client: new CognitoIdentityClient({ region }),
        identityPoolId: identityPoolID
      })
    });
    return client;
  }, [region, identityPoolID]);

  React.useEffect(() => {
    const fetchFiles = async () => {
      try {
        const data = await s3Client.send(new ListObjectsV2Command({ Bucket: bucketName }));
        if (data.Contents) {
          const fileObjects = data.Contents.map(file => ({
            Key: file.Key,
            LastModified: file.LastModified,
            Size: file.Size,
            ETag: file.ETag,
            StorageClass: file.StorageClass,
            FileType: file.Key?.split(".").pop() || "file",
          }));
          setFiles(fileObjects);
        }
      } catch (error) {
        console.error("Error fetching files: ", error);
      }
    };
    fetchFiles();
  }, [s3Client, bucketName]);

  React.useEffect(() => {
    if (searchString === "") {
      setVisibleFiles(files);
    } else {
      const filteredFiles = files.filter(file => file.Key?.toLowerCase().includes(searchString.toLowerCase()));
      setVisibleFiles(filteredFiles);
    }
  }, [files, searchString]);

  return <div className="">
    <div className="flex justify-between items-center flex-nowrap">
      <div className="flex-grow min-w-[200px] py-4">
        <input className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-400 px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          placeholder="Search Title ..." onChange={handleSearchChange} />
      </div>
    </div>

    <ul className="grid grid-cols-4 overflow-auto mb-4" style={{ gridTemplateColumns: "1fr 12fr 4fr 4fr" }}>
      <li className="col-span-4 grid grid-cols-subgrid py-2 px-4 gap-2 font-semibold">
        <div></div>
        <span>File Name</span>
        <span>Size</span>
        <span className="w-max">Date</span>
      </li>

      {visibleFiles.map((file, index) => (
        <li key={index}
          className="col-span-4 grid grid-cols-subgrid py-2 px-4 gap-2 hover:bg-gray-100 hover:cursor-pointer"
          onClick={() => downloadItem(s3Client, bucketName, file, setDownloadProgress)}
        >
          <FileIcon fileType={file.FileType} />
          <FileName name={file.Key ? file.Key : ""} />
          <FileSize size={file.Size ? file.Size : 0} />
          <p>{file.LastModified?.toLocaleDateString()}</p>
        </li>
      ))}
    </ul>
    <div className="bottom-0 sticky w-full h-12 max-h-12 bg-white z-10 py-2 border-t-2 border-slate-300">
      {downloadProgress.fullSize === 0 ?
        <span className="text-slate-400">No download task, <span className='text-primary-600 italic font-semibold'>Click on files to download</span></span> :
        <div className="flex justify-between items-center">
          <span className="text-primary-600">Downloading: <FileSize size={downloadProgress.currSize} /> / <FileSize size={downloadProgress.fullSize} /></span>
          <progress className="h-2 rounded bg-gray-200" value={downloadProgress.currSize} max={downloadProgress.fullSize} />
        </div>
      }
    </div>
  </div>;
}

export default FileSystemApp;
