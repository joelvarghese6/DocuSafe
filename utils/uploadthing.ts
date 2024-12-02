import {
    generateUploadButton,
    generateUploadDropzone,
  } from "@uploadthing/react";
  
  import type { OurFileRouter } from "../lib/upload-thing/uploadthing";
  
  export const UploadButton = generateUploadButton<OurFileRouter>();
  export const UploadDropzone = generateUploadDropzone<OurFileRouter>();
  