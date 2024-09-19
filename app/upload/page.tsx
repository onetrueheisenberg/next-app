"use client";
import { CldUploadWidget } from "next-cloudinary";
import React, { useState } from "react";
import { CldImage } from "next-cloudinary";

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");
  return (
    <>
      {publicId && (
        <CldImage
          width="960"
          height="600"
          src={publicId}
          sizes="100vw"
          alt="Description of my image"
        />
      )}
      ;
      <CldUploadWidget
        uploadPreset="rz1jymps"
        onUploadAdded={(result) => {
          const info = result.info as unknown as CloudinaryResult;
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => {
          return (
            <button className="btn btn-primary" onClick={() => open()}>
              Upload an Image
            </button>
          );
        }}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
