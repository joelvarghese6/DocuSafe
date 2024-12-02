"use client";

import React, { useState } from "react";
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

import styles from "./upload-document.module.css";


type Props = {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (name: string) => void;
}

export const UploadModal = ({ isOpen, onClose, onSubmit }: Props) => {
    if (!isOpen) return null; // Don't render the modal if it's not open

    const [file, setFile] = useState(null);
    const [docName, setDocName] = useState("");
    const [secretKey, setSecretKey] = useState("");

    const handleFileChange = (event: any) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = () => {

        if (!file || !secretKey) {
            alert("File and key are required!");
            return;
        }

        // const formData = new FormData();
        // formData.append(
        //     "myFile",
        //     file,
        //     "file",
        // );

 

    }



    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <h2 className={styles.heading}>Enter Your Name</h2>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.image}>
                        <label>Your Image File</label>
                        <input type="file" name="myImage" accept="image/*" onChange={handleFileChange} />
                    </div>
                    <input
                        type="text"
                        name="name"
                        className={styles.input}
                        placeholder="Enter your name"
                        value={docName}
                        onChange={(e) => setDocName(e.target.value)}
                    />
                    <input
                        type="text"
                        name="secret"
                        className={styles.input}
                        placeholder="Enter the key"
                        value={secretKey}
                        onChange={(e) => setSecretKey(e.target.value)}
                    />
                    <div className={styles.buttonContainer}>
                        <button type="button" className={styles.button} onClick={onClose}>
                            Close
                        </button>
                        <button type="submit" className={styles.button}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
