import { Layout } from "@/components/Generals/Layout";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const Products: React.FC = () => {
  return (
    <>
      <Head>
        <title>Products | Renewals Admin</title>
        <meta name="og:title" property="og:title" content="Products" />
      </Head>

      <Layout>
        <Link href={"/products/new"} className="bg-yellow-700 h-6">
          Add new product
        </Link>
      </Layout>
    </>
  );
};

export default Products;
