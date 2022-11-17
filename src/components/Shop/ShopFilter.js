import {
  Badge,
  Box,
  Checkbox,
  Heading,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Select,
  Stack,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { categoryListAllAction } from "../../redux/actions/CategoryAction";
import { getFilteredProducts } from "../../redux/actions/ProductAction";
import CheckboxCategoryFilter from "./Checkbox";
import { prices } from "./PriceChart";
import RadioBox from "./RadioBox";
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
const ShopFilter = (props) => {
  const { products } = props;
  const dispatch = useDispatch();
  const [myFilters, setMyFilters] = useState({
    filters: { category: [], price: [] },
  });
  const [limit, setLimit] = useState(100);
  const [skip, setSkip] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [activePage, setActivePage] = useState(1);
  const categoryList = useSelector((state) => state.categoryList);
  const { categories } = categoryList;
  const size = products.length;
  const init = () => {
    dispatch(categoryListAllAction());
  };
  const loadFilteredResults = (newFilters) => {
    dispatch(getFilteredProducts(skip, limit, newFilters));
    setActivePage(1);
  };

  const handleFilters = (filters, filterBy) => {
    const newFilters = { ...myFilters };
    newFilters.filters[filterBy] = filters;

    if (filterBy === "price") {
      let priceValues = handlePrice(filters);
      newFilters.filters[filterBy] = priceValues;
    }
    loadFilteredResults(skip, limit, myFilters.filters);
    setMyFilters(newFilters);
  };

  const handlePrice = (value) => {
    const data = prices;
    let array = [];

    for (let key in data) {
      if (data[key]._id === parseInt(value)) {
        array = data[key].array;
      }
    }
    return array;
  };
  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };
  const totalItems = products.length;
  let activeProducts = products.slice(
    itemsPerPage * activePage - itemsPerPage,
    itemsPerPage * activePage
  );

  const onChange = (e) => {
    setItemsPerPage(e.target.value);
  };
  useEffect(() => {
    init();
    loadFilteredResults(skip, limit, myFilters.filters);
  }, []);
  return (
    <aside className="col-md-3">
      <Box className="card border-0">
        <article className="filter-group accordion-item">
          <header className="accordion-header" id="headingFour">
            <Heading
              as="h5"
              size="sm"
              className="accordion-button title"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="true"
              aria-controls="collapseFour"
            >
              Sản phẩm mỗi trang
            </Heading>
          </header>
          <div className="filter-content collapse show" id="collapseFour">
            <div className="card-body">
              <Select onChange={onChange}>
                <option value={6}>6</option>
                <option value={9}>9</option>
                <option value={12}>12</option>
              </Select>
            </div>
          </div>
        </article>

        <article className="filter-group accordion-item">
          <header className=" accordion-header" id="headingOne">
            <Heading
              as="h5"
              size="sm"
              className="accordion-button title"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Loại sản phẩm
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
              size="sm"
              className="accordion-button title"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              Thương hiệu
            </Heading>
          </header>
          <div className="filter-content collapse show" id="collapseTwo">
            <ul className="list-group p-1">
              <CheckboxCategoryFilter
                categories={categories}
                handleFilters={(filters) => handleFilters(filters, "category")}
              />
            </ul>
          </div>
        </article>
        <article className="filter-group accordion-item">
          <header className="accordion-header" id="headingThree">
            <Heading
              as="h5"
              size="sm"
              className="accordion-button title"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="true"
              aria-controls="collapseThree"
            >
              Khoảng giá
            </Heading>
          </header>
          <div className="filter-content collapse show" id="collapseThree">
            <div className="card-body">
              <RadioBox
                prices={prices}
                handleFilters={(filters) => handleFilters(filters, "price")}
              />
            </div>
          </div>
        </article>
      </Box>
    </aside>
  );
};

export default ShopFilter;
