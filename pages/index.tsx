"use client";
import DocumentCard from "../components/Dashboard/document-card";
import Layout from "../components/layout";
import { WelcomePage } from "../components/Welcome/welcome-page";
import { useSession } from "next-auth/react";

export default function IndexPage() {

  const { status } = useSession();
  

  return (
    <Layout>
      {status === "authenticated" ? <DocumentCard /> : <WelcomePage />}
    </Layout>
  );
}
