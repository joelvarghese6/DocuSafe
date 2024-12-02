import React from "react";
import styles from "./verify-card.module.css";

const VerifyDocumentsCard = () => {
  const documents = [
    { id: "101", name: "Passport", permission: "Read" },
    { id: "102", name: "Utility Bill", permission: "Read & Write" },
    { id: "103", name: "Driver's License", permission: "Read" },
  ];

  const handleVerify = (id: string) => {
    console.log(`Verify document with ID: ${id}`);
  };

  const handleSearch = () => {
    console.log("Search documents initiated");
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h2>Documents to Verify</h2>
        <button className={styles.searchButton} onClick={handleSearch}>
          Search Documents
        </button>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Document ID</th>
            <th>Document Name</th>
            <th>Permission</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc) => (
            <tr key={doc.id}>
              <td>{doc.id}</td>
              <td>{doc.name}</td>
              <td>{doc.permission}</td>
              <td>
                <button
                  className={styles.verifyButton}
                  onClick={() => handleVerify(doc.id)}
                >
                  Verify
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VerifyDocumentsCard;
