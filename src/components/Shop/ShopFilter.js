import {
  Badge,
  Box,
  Checkbox,
  Heading,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Stack,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";

const ShopFilter = (props) => {
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
  const { products, categories } = props;
  return (
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
          <div className="filter-content collapse show" id="collapseOne">
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
                {products.map((product) => (
                  <li key={product._id}>
                    <Link to={`/products/${product._id}`}>{product.name}</Link>
                  </li>
                ))}
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
          <div className="filter-content collapse show" id="collapseTwo">
            <ul class="list-group p-1">
              {categories.map((category) => (
                <li
                  key={category._id}
                  className="list-item d-flex align-items-center justify-content-between"
                >
                  <label className="list-group-item">
                    <input
                      className="form-check-input me-3"
                      type="checkbox"
                      defaultValue
                    />
                    {category.name}
                  </label>
                  <Badge className="px-3">{categories.length}</Badge>
                </li>
              ))}
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
          <div className="filter-content collapse show" id="collapseThree">
            <div className="card-body">
              <RangeSlider
                // eslint-disable-next-line
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
          <div className="filter-content collapse show" id="collapseFour">
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
                  New items
                </Checkbox>
                <Checkbox size="md" colorScheme="gray">
                  Old Items
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
  );
};

export default ShopFilter;
