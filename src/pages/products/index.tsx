import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";

import { Layout } from "@/components/Generals/Layout";
import { FiEdit } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";
import { BsDatabaseAdd } from "react-icons/bs";

import axios from "axios";
import Modal from "@/components/Modals/Modal";
import NewProduct from "./new";
// import { ProductCard } from "@/components/Cards/ProductCard";

const Products: React.FC = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [modalState, setModalState] = useState(false);

  const handleModal = () => {
    setModalState(!modalState);
  };

  useEffect(() => {
    axios.get("/api/products").then(res => setProducts(res.data));
  }, [products]);

  return (
    <>
      <Head>
        <title>Products | Renewals Admin</title>
        <meta name="og:title" property="og:title" content="Products" />
      </Head>

      <Layout>
        <div className="w-full">
          <span className="flex items-center justify-around w-full">
            <Link
              href={"/products/new"}
              className="text-white bg-yellow-700 rounded-lg p-2 hover:bg-yellow-800"
              title="Added new product in new page"
            >
              Add new product
            </Link>

            <button
              className="bg-yellow-700 text-white rounded-lg p-2 hover:bg-yellow-800"
              onClick={handleModal}
              title="Add new product with modal"
            >Add new product with modal</button>
          </span>

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
                        onClick={handleModal}
                        style={{ cursor: "pointer" }}
                      />{" "}
                      <FaTrash
                        onClick={handleModal}
                        style={{ cursor: "pointer" }}
                      />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <Modal isOpen={modalState} onClose={handleModal}>
            <NewProduct isModal onClose={handleModal} />
          </Modal>
        </div>
      </Layout>
    </>
  );
};

export default Products;
