import Image from "next/image";
import React from "react";

export const ProductCard: React.FC<ProductProps> = ({
  id,
  title,
  description,
  price,
  image,
}) => {
  return (
    <div className="flex-col w-max">
      <Image src={image} height={250} width={350} alt={title} />
      <h2 className="text-xl font-bold">{title}</h2>
      <h3 className="max-w-sm text-sm">{description}</h3>
      <p>
        {price.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
      </p>
    </div>
  );
};
