import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
  title: { type: Number, require: true },
  description: String,
  price: { type: Number, require: true },
  image: String,
});

export const Product = model("product", ProductSchema);
