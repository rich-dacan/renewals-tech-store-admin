import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema({
  title: { type: String, require: true },
  description: String,
  price: { type: Number, require: true },
  image: String,
});

export const Product = models.products || model("products", ProductSchema);
