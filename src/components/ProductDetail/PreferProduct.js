import { Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const PreferProduct = ({ productPrefer: { _id, name, image, price } }) => {
  return (
    <div className="product-card">
      <Link to={`/products/${_id}`}>
        <Image
          src={image}
          width={250}
          height={250}
          className="product-image-prefer"
        />
        <Text fontSize="16px" className="product-name-prefer">
          {name}
        </Text>
        <Text fontSize="14px" className="product-price-prefer">
          ${price}
        </Text>
      </Link>
    </div>
  );
};

export default PreferProduct;
