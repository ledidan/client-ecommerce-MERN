import React, { useEffect } from "react";
import {
  Badge,
  Box,
  Checkbox,
  Container,
  Flex,
  Heading,
  Image,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Select,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../redux/actions/ProductAction";
import { categoryListAllAction } from "../redux/actions/CategoryAction";
const ApplyButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  border: 0;
  text-transform: uppercase;
  font-size: 12px;
  margin-top: 15px;
`;

const ShopScreen = ({ keyword, pageNumber }) => {
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
                <Link to="#dsad">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="#sdsd">Best category</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                <Link to="#dsad">Great articles</Link>
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
            <aside className="col-md-3">
              <Box className="card border-0">
                <article className="filter-group accordion-item">
                  <header className=" accordion-header" id="headingOne">
                    <Heading
                      as="h5"
                      size="md"
                      class="accordion-button title"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Product Type
                    </Heading>
                  </header>
                  <div
                    className="filter-content collapse show"
                    id="collapseOne"
                  >
                    <div className="card-body">
                      <form className="pb-3">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search"
                          />
                          <div className="input-group-append">
                            <button className="btn btn-light" type="button">
                              <i className="fa fa-search" />
                            </button>
                          </div>
                        </div>
                      </form>
                      <ul className="list-menu">
                        <li>
                          <a href="#1">People</a>
                        </li>
                        <li>
                          <a href="#1">Watches </a>
                        </li>
                        <li>
                          <a href="#1">Cinema</a>
                        </li>
                        <li>
                          <a href="#1">Clothes</a>
                        </li>
                        <li>
                          <a href="#1">Home items </a>
                        </li>
                        <li>
                          <a href="#1">Animals</a>
                        </li>
                        <li>
                          <a href="#1">People </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </article>
                <article className="filter-group accordion-item">
                  <header className=" accordion-header" id="headingTwo">
                    <Heading
                      as="h5"
                      size="md"
                      class="accordion-button title"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="true"
                      aria-controls="collapseTwo"
                    >
                      Brands
                    </Heading>
                  </header>
                  <div
                    className="filter-content collapse show"
                    id="collapseTwo"
                  >
                    <ul class="list-group p-1">
                      <li className="list-item d-flex align-items-center justify-content-between">
                        <label className="list-group-item">
                          <input
                            className="form-check-input me-1"
                            type="checkbox"
                            defaultValue
                          />
                          First checkbox
                        </label>
                        <Badge>143</Badge>
                      </li>
                    </ul>
                  </div>
                </article>
                <article className="filter-group accordion-item">
                  <header className="accordion-header" id="headingThree">
                    <Heading
                      as="h5"
                      size="md"
                      class="accordion-button title"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="true"
                      aria-controls="collapseThree"
                    >
                      Price Range
                    </Heading>
                  </header>
                  <div
                    className="filter-content collapse show"
                    id="collapseThree"
                  >
                    <div className="card-body">
                      <RangeSlider
                        aria-label={["min", "max"]}
                        defaultValue={[10, 30]}
                      >
                        <RangeSliderTrack>
                          <RangeSliderFilledTrack />
                        </RangeSliderTrack>
                        <RangeSliderThumb index={0} />
                        <RangeSliderThumb index={1} />
                      </RangeSlider>
                      <div className="row">
                        <div className="col col-md-6 col-lg-6">
                          <label>Min</label>
                          <input
                            className="form-control"
                            placeholder="$0"
                            type="number"
                          />
                        </div>
                        <div className="col  text-right col-md-6 col-lg-6">
                          <label>Max</label>
                          <input
                            className="form-control"
                            placeholder="$1,00"
                            type="number"
                          />
                        </div>
                      </div>
                      <ApplyButton type="submit">Tìm kiếm</ApplyButton>
                    </div>
                  </div>
                </article>
                <article className="filter-group accordion-item">
                  <header className=" accordion-header" id="headingFour">
                    <Heading
                      as="h5"
                      size="md"
                      class="accordion-button title"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="true"
                      aria-controls="collapseFour"
                    >
                      Sizes
                    </Heading>
                  </header>
                  <div
                    className="filter-content collapse show"
                    id="collapseFour"
                  >
                    <div className="card-body">
                      <label className="checkbox-btn">
                        <input type="checkbox" />
                        <span className="btn btn-light m-lg-1"> XS </span>
                      </label>
                      <label className="checkbox-btn">
                        <input type="checkbox" />
                        <span className="btn btn-light m-lg-1"> SM </span>
                      </label>
                      <label className="checkbox-btn">
                        <input type="checkbox" />
                        <span className="btn btn-light m-lg-1"> LG </span>
                      </label>
                      <label className="checkbox-btn">
                        <input type="checkbox" />
                        <span className="btn btn-light m-lg-1">XXL</span>
                      </label>
                    </div>
                  </div>
                </article>
                <article className="filter-group accordion-item">
                  <header className="accordion-header" id="headingFive">
                    <Heading
                      as="h5"
                      size="md"
                      class="accordion-button title"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="true"
                      aria-controls="collapseFive"
                    >
                      More Filters
                    </Heading>
                  </header>
                  <div className="filter-content collapse in" id="collapseFive">
                    <div className="card-body">
                      <Stack spacing={[1, 5]} direction={["row", "column"]}>
                        <Checkbox size="md" colorScheme="gray">
                          Used items
                        </Checkbox>
                        <Checkbox size="md" colorScheme="gray">
                          New items
                        </Checkbox>
                        <Checkbox size="md" colorScheme="gray">
                          Very old
                        </Checkbox>
                        <Checkbox size="md" colorScheme="gray">
                          Other conditions
                        </Checkbox>
                      </Stack>
                    </div>
                  </div>
                </article>
              </Box>
            </aside>
            <main className="col-md-9">
              <header className="border-bottom mb-4 pb-3 mt-4">
                <Flex align="center" textAlign="center" justify="space-between">
                  <Text className="mr-md-auto">32 Items found</Text>
                  <Select size="md" maxW={{ base: "sm", md: "md", lg: "2xl" }}>
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
              <div className="row">
                <div className="col-md-4">
                  <figure className="card card-product-grid">
                    <div className="img-wrap">
                      <span className="badge badge-danger"> NEW </span>
                      <img src="assets/images/items/1.jpg" />
                    </div>
                    <figcaption className="info-wrap">
                      <div className="fix-height">
                        <a href="#1" className="title">
                          Great item name goes here
                        </a>
                        <div className="price-wrap mt-2">
                          <span className="price">$1280</span>
                          <del className="price-old">$1980</del>
                        </div>
                      </div>
                      <a href="#1" className="btn btn-block btn-primary">
                        Add to cart{" "}
                      </a>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-4">
                  <figure className="card card-product-grid">
                    <div className="img-wrap">
                      <img src="assets/images/items/2.jpg" />
                      <a className="btn-overlay" href="#1">
                        <i className="fa fa-search-plus" /> Quick view
                      </a>
                    </div>
                    <figcaption className="info-wrap">
                      <div className="fix-height">
                        <a href="#1" className="title">
                          Product name goes here just for demo item
                        </a>
                        <div className="price-wrap mt-2">
                          <span className="price">$1280</span>
                        </div>
                      </div>
                      <a href="#1" className="btn btn-block btn-primary">
                        Add to cart{" "}
                      </a>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-4">
                  <figure className="card card-product-grid">
                    <div className="img-wrap">
                      <img src="assets/images/items/3.jpg" />
                      <a className="btn-overlay" href="#1">
                        <i className="fa fa-search-plus" /> Quick view
                      </a>
                    </div>
                    <figcaption className="info-wrap">
                      <div className="fix-height">
                        <a href="#1" className="title">
                          Product name goes here just for demo item
                        </a>
                        <div className="price-wrap mt-2">
                          <span className="price">$1280</span>
                        </div>
                      </div>
                      <a href="#1" className="btn btn-block btn-primary">
                        Add to cart{" "}
                      </a>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-4">
                  <figure className="card card-product-grid">
                    <div className="img-wrap">
                      <img src="assets/images/items/5.jpg" />
                      <a className="btn-overlay" href="#1">
                        <i className="fa fa-search-plus" /> Quick view
                      </a>
                    </div>
                    <figcaption className="info-wrap">
                      <div className="fix-height">
                        <a href="#1" className="title">
                          Product name goes here just for demo item
                        </a>
                        <div className="price-wrap mt-2">
                          <span className="price">$1280</span>
                        </div>
                      </div>
                      <a href="#1" className="btn btn-block btn-primary">
                        Add to cart{" "}
                      </a>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-4">
                  <figure className="card card-product-grid">
                    <div className="img-wrap">
                      <img src="assets/images/items/6.jpg" />
                      <a className="btn-overlay" href="#1">
                        <i className="fa fa-search-plus" /> Quick view
                      </a>
                    </div>
                    <figcaption className="info-wrap">
                      <div className="fix-height">
                        <a href="#1" className="title">
                          Product name goes here just for demo item
                        </a>
                        <div className="price-wrap mt-2">
                          <span className="price">$1280</span>
                        </div>
                      </div>
                      <a href="#1" className="btn btn-block btn-primary">
                        Add to cart{" "}
                      </a>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-4">
                  <figure className="card card-product-grid">
                    <div className="img-wrap">
                      <img src="assets/images/items/7.jpg" />
                      <a className="btn-overlay" href="#1">
                        <i className="fa fa-search-plus" /> Quick view
                      </a>
                    </div>
                    <figcaption className="info-wrap">
                      <div className="fix-height">
                        <a href="#1" className="title">
                          Product name goes here just for demo item
                        </a>
                        <div className="price-wrap mt-2">
                          <span className="price">$1280</span>
                        </div>
                      </div>
                      <a href="#1" className="btn btn-block btn-primary">
                        Add to cart{" "}
                      </a>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-4">
                  <figure className="card card-product-grid">
                    <div className="img-wrap">
                      <img src="assets/images/items/1.jpg" />
                      <a className="btn-overlay" href="#1">
                        <i className="fa fa-search-plus" /> Quick view
                      </a>
                    </div>
                    <figcaption className="info-wrap">
                      <div className="fix-height">
                        <a href="#1" className="title">
                          Product name goes here just for demo item
                        </a>
                        <div className="price-wrap mt-2">
                          <span className="price">$1280</span>
                        </div>
                      </div>
                      <a href="#1" className="btn btn-block btn-primary">
                        Add to cart{" "}
                      </a>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <nav className="mt-4" aria-label="Page navigation sample">
                <ul className="pagination">
                  <li className="page-item disabled">
                    <a className="page-link" href="#1">
                      Previous
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#1">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#1">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#d">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </main>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopScreen;
