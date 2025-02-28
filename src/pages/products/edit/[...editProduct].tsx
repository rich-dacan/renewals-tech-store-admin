import { Layout } from "@/components/Generals/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function EditProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<ProductProps>();

  useEffect(() => {
    if (!id) return;

    axios.get('/api/products?id=' + id).then(res => setProduct(res.data));
  }, [id]);

  // if (!id) {
  //   return <p>Loading...</p>;
  // }

  return (
    <Layout>
      <h1>Edit Product</h1>
      {product ? (
        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </Layout>
  );
}
