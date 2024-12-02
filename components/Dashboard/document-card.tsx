"use client";

import React from "react";
import styles from "./document-card.module.css";
import { useGetDocumentById } from "../../hooks/usefetchDocById";
import { useGetDocumentByUser } from "../../hooks/usefetchAllDocByUser";
import { RegisterFormCard } from "../registerUser/register-user";
import { useGetUser } from "../../hooks/usefetchUserDetails";
import { useState } from "react";
import { UploadModal } from "../Modals/upload-document";

const DocumentCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleSubmitName = (name: string) => {
    console.log("Submitted Name:", name);
  };

  // const { data } = useGetDocumentById({docId: "sdsdsdsdsdsd"});
  // console.log(data);

  let isRegistered = false;

  const { data, isLoading } = useGetDocumentByUser({ userId: "qweqweqwqer" });
  const { data: userData, isLoading: userDataLoading } = useGetUser({ userId: "asdasdasdasd" })

  if (isLoading || userDataLoading) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  if (!data || !userData) {
    return (
      <div>
        No Data!
      </div>
    )
  }

  isRegistered = true;
  const userDocuments = data.data;

  return (
    <div>
      {isRegistered ? (
        <div className={styles.card}>

          <div className={styles.header}>
            <h2>Create and Manage Documents</h2>
            <button className={styles.addButton} onClick={handleOpenModal}>Add New Document</button>
            <UploadModal 
              isOpen={isModalOpen}
              onClose={handleCloseModal}
              onSubmit={handleSubmitName}
            />
          </div>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Document ID</th>
                <th>Document Name</th>
                <th>Uploaded Date</th>
                {/* <th>Shared With</th> */}
                <th>View</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {userDocuments.map((doc) => (
                <tr key={doc.docId}>
                  <td>{doc.docId}</td>
                  <td>{doc.docname}</td>
                  <td>{doc.timestamp}</td>
                  {/* <td>{doc.sharedWith}</td> */}
                  <td>
                    <button className={styles.viewButton}>View</button>
                  </td>
                  <td>
                    <button className={styles.shareButton}>Share</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : <RegisterFormCard />}
    </div>

  );
};

export default DocumentCard;
