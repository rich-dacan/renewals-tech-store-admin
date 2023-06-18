import { NextApiRequest, NextApiResponse } from "next";

import { Product } from "../../../../models/Product";
import { mongooseConnect } from "../../../../lib/mongoose";

export default async function createNewProduct(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { method } = req;

    await mongooseConnect();

    if (method === "GET") {
      res.status(200).json(await Product.find());
    }

    if (method === "POST") {
      const { title, description, price, image } = req.body;

      const newProduct = await Product.create({
        title,
        description,
        price,
        image,
      });

      res.status(200).json(newProduct);
    }
  } catch (error) {
    console.error(error);
  }
}
