import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productData } from "../ProductData";
import { HiArrowLeftCircle } from "react-icons/hi2";
import { FiExternalLink } from "react-icons/fi";


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
       <div className="flex items-end gap-2">
  {product.liveLink ? (
    <a
      href={product.liveLink}
      target="_blank"
      rel="noopener noreferrer"
      className="xs:flex xs:items-center gap-2 text-inherit hover:underline"
    >
      <h1 className="font-rosarivo text-2xl md:text-3xl lg:text-5xl font-semibold">
        {product.heading}
      </h1>
      <FiExternalLink className="text-xl md:text-2xl lg:text-3xl" />
    </a>
  ) : (
    <h1 className="font-rosarivo text-2xl md:text-3xl lg:text-5xl font-semibold">
      {product.heading}
    </h1>
  )}
</div>


        <p className="my-10 md:text-lg lg:text-2xl xl:text-3xl lg:leading-relaxed xl:leading-loose cursor-default">
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
        className="absolute top-0 right-2 flex items-center"
      >
        {/* Icon for mobile screens */}
        <HiArrowLeftCircle className="block md:hidden text-2xl rounded-full bg-text text-bg " />


        {/* Text for larger screens */}
        <span className="hidden md:block font-robotoFlex md:text-xl lg:text-2xl bg-text text-bg px-2 py-1 rounded-lg">
          Go Back
        </span>
      </button>
    </div>
  );
};

export default ProductCard;
