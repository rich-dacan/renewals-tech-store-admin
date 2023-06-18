import { NextApiRequest, NextApiResponse } from "next";

import mongoose from "mongoose";
import clientPromise from "../../../../lib/mongodb";

export default function createNewProduct(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { method } = req;

    mongoose.Promise = clientPromise;

    if (method === "POST") {
      res.status(200).json("post");
    }
  } catch (error) {
    console.error(error);
  }
}
