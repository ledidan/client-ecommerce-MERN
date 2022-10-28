import { Badge, Flex, Image, Select, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";
import Message from "../components/LoadingError/Error";
import Loading from "../components/LoadingError/Loading";
import Pagination from "../components/homeComponents/pagination";

const CartButton = styled.button`
  padding: 10px;
  background-color: black;
  font-size: 14px;
  text-transform: uppercase;
`;
const ShopProduct = (props) => {
  const { loading, error, keyword, products, page, pages } = props;
  return (
    <main className="col-md-9">
      <header className="border-bottom mb-4 pb-3 mt-4">
        <Flex align="center" textAlign="center" justify="end" gap={5}>
          <Text className="mr-md-auto ">32 Items found</Text>
          <Select size="md" maxW={{ base: "sm", md: "md", lg: "3xs" }}>
            <option>Latest items</option>
            <option>Trending</option>
            <option>Most Popular</option>
            <option>Cheapest</option>
          </Select>
          <div className="btn-group">
            <a
              href="#1"
              className="btn btn-outline-secondary"
              data-toggle="tooltip"
              title="List view"
            >
              <i className="fa fa-bars" />
            </a>
            <a
              href="#1"
              className="btn  btn-outline-secondary active"
              data-toggle="tooltip"
              title="Grid view"
            >
              <i className="fa fa-th" />
            </a>
          </div>
        </Flex>
      </header>
      {loading ? (
        <Loading />
      ) : error ? (
        <Message variant="alert-danger">{error}</Message>
      ) : (
        <>
          <div className="row">
            {products.map((item) => (
              <div className="col-sm-6 col-md-6 col-lg-4" key={item._id}>
                <figure className="card card-product-grid">
                  <Badge backgroundColor="red" color="white" className="badge">
                    NEW{" "}
                  </Badge>
                  <Link to={`/products/${item._id}`} className="img-wrap">
                    <Image src={item.image} objectFit="cover" alt={item.name} />
                  </Link>
                  <figcaption className="info-wrap">
                    <div className="fix-height">
                      <Link to={`/products/${item._id}`} className="title">
                        {item.name}
                      </Link>
                      <Text className="price">${item.price}</Text>
                      {/* <del className="price-old">$1980</del> */}
                    </div>
                    <CartButton className="text-white">
                      Thêm giỏ hàng
                    </CartButton>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
          <Pagination
            page={page}
            pages={pages}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
    </main>
  );
};

export default ShopProduct;
