import React, { useState } from "react";

import { TfiControlBackward } from "react-icons/tfi";
import { Layout } from "@/components/Generals/Layout";
import { useRouter } from "next/router";
import axios from "axios";
import Head from "next/head";
import { AiOutlineCloseCircle } from "react-icons/ai";

interface Props {
  isModal?: boolean;
  onClose: () => void;
  onSubmitted?: boolean;
}

const NewProduct: React.FC<Props> = ({ isModal = false, onClose }) => {
  const router = useRouter();

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [image, setImage] = useState<string>("");

  async function createProduct(event: { preventDefault: () => void }) {
    event.preventDefault();

    const payload = { title, description, price, image };

    await axios.post("/api/products", payload);

    if (isModal) {
      onClose();
    } else {
      router.push("/products");
    }
  }

  return (
    <>
      {!isModal ? (
        <Layout>
          <Head>
            <title>New product | Renewals Admin</title>
            <meta name="og:title" property="og:title" content="Products" />
          </Head>

          <form onSubmit={createProduct} className="w-full">
            <span className="flex w-full justify-between items-center">
              <h1>
                <b>New product</b>
              </h1>

              <button
                onClick={router.back}
                title="Back"
                className="bg-yellow-700 text-white p-2 rounded-lg hover:bg-yellow-800"
              >
                <TfiControlBackward size={32} />
              </button>
            </span>

            <label>Product name</label>
            <input
              type="text"
              placeholder="product name"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <label>Product description</label>
            <textarea
              placeholder="description"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
            <label>Product price (in USD)</label>
            <input
              type="number"
              placeholder="price"
              value={price}
              onChange={e => setPrice(e.target.value)}
            />
            <label>Product image</label>
            <input
              type="text"
              placeholder="image"
              value={image}
              onChange={e => setImage(e.target.value)}
            />

            <button type="submit" className="btn-primary">
              Save
            </button>
          </form>
        </Layout>
      ) : (
        <form onSubmit={createProduct} className="w-full max-w-xl ">
          <span className="flex justify-between items-center">
            <h1>
              <b>New product</b>
            </h1>

            <button
              onClick={onClose}
              title="Back"
              className="bg-yellow-700 text-white p-2 rounded-full hover:bg-yellow-800"
            >
              {/* <TfiControlBackward size={32} /> */}
              <AiOutlineCloseCircle className="h-6 w-6" />
            </button>
          </span>

          <label>Product name</label>
          <input
            type="text"
            placeholder="product name"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <label>Product description</label>
          <textarea
            placeholder="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <label>Product price (in USD)</label>
          <input
            type="number"
            placeholder="price"
            value={price}
            onChange={e => setPrice(e.target.value)}
          />
          <label>Product image</label>
          <input
            type="text"
            placeholder="image"
            value={image}
            onChange={e => setImage(e.target.value)}
          />

          <button type="submit" className="btn-primary">
            Save
          </button>
        </form>
      )}
    </>
  );
};

export default NewProduct;
