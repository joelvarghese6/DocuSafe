import React from "react";
import styles from "./welcome-page.module.css";
import { getCsrfToken, signIn, signOut, useSession } from "next-auth/react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { SigninMessage } from "../../utils/SigninMessage";
import bs58 from "bs58";

export const WelcomePage = () => {

  const wallet = useWallet();
  const walletModal = useWalletModal();

  const handleSignIn = async () => {
    try {
      if (!wallet.connected) {
        walletModal.setVisible(true);
      }

      const csrf = await getCsrfToken();
      if (!wallet.publicKey || !csrf || !wallet.signMessage) return;

      const message = new SigninMessage({
        domain: window.location.host,
        publicKey: wallet.publicKey?.toBase58(),
        statement: `Sign this message to sign in to the app.`,
        nonce: csrf,
      });

      const data = new TextEncoder().encode(message.prepare());
      const signature = await wallet.signMessage(data);
      const serializedSignature = bs58.encode(signature);

      signIn("credentials", {
        message: JSON.stringify(message),
        redirect: false,
        signature: serializedSignature,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Welcome to DocuSafe</h1>
        <p className={styles.description}>
          Manage and upload your documents securely with blockchain technology powered by Solana. 
          Your documents are protected and ready for KYC compliance.
        </p>
        <button className={styles.signInButton} onClick={handleSignIn}>
          Sign In to Get Started
        </button>
      </div>
    </div>
  );
};
