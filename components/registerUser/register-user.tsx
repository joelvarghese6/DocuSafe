import React from "react";
import styles from "./register-user.module.css";

export const RegisterFormCard = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Get form data
    const form = e.target;
    const formData = new FormData(form);

    // Validate fields
    const name = formData.get("name");
    const email = formData.get("email");
    const masterKey = formData.get("masterKey");
    const role = formData.get("role");

    if (!name || !email || !masterKey || !role) {
      alert("All fields are required.");
      return;
    }

    console.log("Form Submitted:", { name, email, masterKey, role });
    form.reset(); // Optional: Clear the form after submission
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.heading}>User Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className={styles.input}
            placeholder="Enter your name"
          />
        </div>

        {/* Email Field */}
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={styles.input}
            placeholder="Enter your email"
          />
        </div>

        {/* Master Key Field */}
        <div className={styles.formGroup}>
          <label htmlFor="masterKey" className={styles.label}>
            Master Key
          </label>
          <input
            type="password"
            id="masterKey"
            name="masterKey"
            className={styles.input}
            placeholder="Enter your master key"
          />
        </div>

        {/* Select Field */}
        <div className={styles.formGroup}>
          <label htmlFor="role" className={styles.label}>
            Role
          </label>
          <select id="role" name="role" className={styles.select}>
            <option value="">Select your role</option>
            <option value="user">User</option>
            <option value="verifier">Verifier</option>
          </select>
        </div>

        {/* Submit Button */}
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};
