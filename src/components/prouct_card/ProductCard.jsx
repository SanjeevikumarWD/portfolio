import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productData } from "../ProductData";

const ProductCard = () => {
  const { id } = useParams();
  const product = productData.find((item) => item.id === id);

  const navigate = useNavigate();

  if (!product) {
    return <p>Product Not Found</p>;
  }

  return (
    <div className="relative mt-28 mx-8 text-text">
      <div className="product-card ">
        <h1 className="font-rosarivo text-2xl md:text-3xl lg:text-5xl font-semibold">
          {product.heading}
        </h1>
        <p className="my-10 md:text-lg lg:text-2xl xl:text-3xl lg:leading-relaxed xl:leading-loose ">
          {product.description}
        </p>
        {product.github && (
          <a
            href={product.github}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <button className="mb-10 font-robotoFlex bg-text text-bg px-2 py-1 rounded-lg md:text-xl">
              Github Repository
            </button>
          </a>
        )}
        <div className="images space-y-4 mb-20">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={`/assets/p${id}/${image}`}
              alt={`Product Image ${index + 1}`}
              className="rounded-lg shadow-md w-full "
            />
          ))}
        </div>
      </div>
      <button
        onClick={() => navigate("/")}
        className="absolute top-0 right-2 font-robotoFlex bg-text text-bg px-2 py-1 rounded-lg md:text-xl"
      >
        Go Back
      </button>
    </div>
  );
};

export default ProductCard;
