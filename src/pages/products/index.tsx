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
        <div>
          <Link
            href={"/products/new"}
            className="text-white bg-yellow-700 rounded-lg p-2"
          >
            Add new product
          </Link>
        </div>
      </Layout>
    </>
  );
};

export default Products;
