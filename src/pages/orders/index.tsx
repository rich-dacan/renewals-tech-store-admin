import { Layout } from "@/components/Generals/Layout";
import Head from "next/head";
import React from "react";

const Orders: React.FC = () => {
  return (
    <>
      <Head>
        <title>Orders | Renewals Admin</title>
        <meta name="og:title" property="og:title" content="Orders" />
      </Head>
      <Layout>Orders</Layout>;
    </>
  );
};

export default Orders;
