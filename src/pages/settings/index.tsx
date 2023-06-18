import { Layout } from "@/components/Generals/Layout";
import Head from "next/head";
import React from "react";

const Settings: React.FC = () => {
  return (
    <>
      <Head>
        <title>Dashboard | Renewals Admin</title>
        <meta name="og:title" property="og:title" content="Dashboard" />
      </Head>
      <Layout>Settings</Layout>;
    </>
  );
};

export default Settings;
