import React, { useEffect } from "react";
import { Heading, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../redux/actions/ProductAction";
import { categoryListAllAction } from "../redux/actions/CategoryAction";

import ShopProduct from "../components/Shop/ShopProduct";
import ShopFilter from "../components/Shop/ShopFilter";

const ShopScreen = ({ match }) => {
  const keyword = match.params.keyword;
  const pageNumber = match.params.pageNumber;
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const categoryList = useSelector((state) => state.categoryList);
  const { loading, error, products, page, pages } = productList;
  const { categories } = categoryList;

  useEffect(() => {
    dispatch(listProduct(keyword, pageNumber));
    dispatch(categoryListAllAction());
  }, [dispatch, keyword, pageNumber]);
  return (
    <>
      <section className="section-pagetop bg mt-5 container-fluid">
        <div className="container">
          <Heading as="h2" size="lg" className="title-page">
            Category products
          </Heading>
          <Stack>
            <ol className="breadcrumb text-dark mt-3">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                <Link to="/shop">Shopping</Link>
              </li>
            </ol>
          </Stack>
        </div>
      </section>
      <section
        className="section-content padding-y accordion"
        id="accordionExample"
      >
        <div className="container">
          <div className="row">
            {/* Filter */}
            <ShopFilter categories={categories} products={products} />
            {/* Product */}
            <ShopProduct
              loading={loading}
              page={page}
              pages={pages}
              keyword={keyword}
              products={products}
              error={error}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopScreen;
