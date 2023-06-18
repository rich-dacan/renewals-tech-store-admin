import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";

import { Layout } from "@/components/Generals/Layout";
import { FiEdit } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";

import axios from "axios";
import Modal from "@/components/Modals/Modal";
// import { ProductCard } from "@/components/Cards/ProductCard";

const Products: React.FC = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    axios.get("/api/products").then(res => setProducts(res.data));
  }, []);

  console.log(isOpen);

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
                      <FiEdit
                        onClick={openModal}
                        style={{ cursor: "pointer" }}
                      />{" "}
                      <FaTrash
                        onClick={openModal}
                        style={{ cursor: "pointer" }}
                      />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <Modal isOpen={isOpen} onClose={closeModal}>
            <h1 className="text-lg font-bold mb-4">Modal Content</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Modal>
        </div>
      </Layout>
    </>
  );
};

export default Products;
