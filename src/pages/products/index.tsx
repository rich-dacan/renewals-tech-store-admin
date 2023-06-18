import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";

import { Layout } from "@/components/Generals/Layout";
import { FiEdit } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";

import axios from "axios";
// import { ProductCard } from "@/components/Cards/ProductCard";

const Products: React.FC = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    axios.get("/api/products").then(res => setProducts(res.data));
  }, []);

  console.log(products);

  return (
    <>
      <Head>
        <title>Products | Renewals Admin</title>
        <meta name="og:title" property="og:title" content="Products" />
      </Head>

      <Layout>
        <div className="w-full">
          <Link
            href={"/products/new"}
            className="text-white bg-yellow-700 rounded-lg p-2 hover:bg-yellow-800"
          >
            Add new product
          </Link>

          <table className="basic">
            <thead className="bg-stone-800 text-white">
              <tr>
                <td>Product name</td>
                <td>Price</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {products.map(prod => (
                <tr key={prod.id}>
                  <td>{prod.title}</td>
                  <td>{prod.price}</td>
                  {/* <td>{prod.image}</td> */}
                  <td>
                    <span className="flex justify-around items-center">
                      <FiEdit style={{ cursor: "pointer" }} />{" "}
                      <FaTrash style={{ cursor: "pointer" }} />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* <div className="flex-cols pt-8">
            <h1 className="font-bold w-full text-center">All products</h1>
            {products?.map(product => (
              <div key={product.id} className="grid-cols-2">
                <ProductCard
                  id={product.id}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  image={product.image}
                />
              </div>
            ))}
          </div> */}
        </div>
      </Layout>
    </>
  );
};

export default Products;
