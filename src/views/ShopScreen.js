import React from "react";
import {
  Badge,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
} from "@chakra-ui/react";
const ShopScreen = () => {
  return (
    <>
      <section className="section-pagetop bg mt-5">
        <div className="container">
          <h2 className="title-page">Category products</h2>
          <nav>
            <ol className="breadcrumb text-dark">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Best category</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Great articles
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section
        className="section-content padding-y accordion"
        id="accordionExample"
      >
        <div className="container ">
          <div className="row">
            <aside className="col-md-3">
              <div className="card">
                <article className="filter-group accordion-item">
                  <header className=" accordion-header" id="headingOne">
                    <a
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <h6 className="title">Product type</h6>
                    </a>
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
                          <a href="#">People</a>
                        </li>
                        <li>
                          <a href="#">Watches </a>
                        </li>
                        <li>
                          <a href="#">Cinema</a>
                        </li>
                        <li>
                          <a href="#">Clothes</a>
                        </li>
                        <li>
                          <a href="#">Home items </a>
                        </li>
                        <li>
                          <a href="#">Animals</a>
                        </li>
                        <li>
                          <a href="#">People </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </article>
                <article className="filter-group accordion-item">
                  <header className=" accordion-header" id="headingTwo">
                    <a
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="true"
                      aria-controls="collapseTwo"
                    >
                      <h6 className="title">Brands</h6>
                    </a>
                  </header>
                  <div
                    className="filter-content collapse show"
                    id="collapseTwo"
                  >
                    <ul class="list-group p-2">
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
                    <a
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="true"
                      aria-controls="collapseThree"
                    >
                      <h6 className="title">Price range </h6>
                    </a>
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
                            placeholder="$1,0000"
                            type="number"
                          />
                        </div>
                      </div>
                      <button className="btn btn-block btn-primary">
                        Apply
                      </button>
                    </div>
                  </div>
                </article>
                <article className="filter-group accordion-item">
                  <header className=" accordion-header" id="headingFour">
                    <a
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="true"
                      aria-controls="collapseFour"
                    >
                      <h6 className="title">Sizes </h6>
                    </a>
                  </header>
                  <div
                    className="filter-content collapse show"
                    id="collapseFour"
                  >
                    <div className="card-body">
                      <label className="checkbox-btn">
                        <input type="checkbox" />
                        <span className="btn btn-light"> XS </span>
                      </label>
                      <label className="checkbox-btn">
                        <input type="checkbox" />
                        <span className="btn btn-light"> SM </span>
                      </label>
                      <label className="checkbox-btn">
                        <input type="checkbox" />
                        <span className="btn btn-light"> LG </span>
                      </label>
                      <label className="checkbox-btn">
                        <input type="checkbox" />
                        <span className="btn btn-light"> XXL </span>
                      </label>
                    </div>
                  </div>
                </article>
                <article className="filter-group accordion-item">
                  <header className="accordion-header" id="headingFive">
                    <a
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="true"
                      aria-controls="collapseFive"
                    >
                      <h6 className="title">More filter </h6>
                    </a>
                  </header>
                  <div className="filter-content collapse in" id="collapseFive">
                    <div className="card-body">
                      <label className="custom-control custom-radio">
                        <input
                          type="radio"
                          name="myfilter_radio"
                          defaultChecked
                          className="custom-control-input"
                        />
                        <div className="custom-control-label">
                          Any condition
                        </div>
                      </label>
                      <label className="custom-control custom-radio">
                        <input
                          type="radio"
                          name="myfilter_radio"
                          className="custom-control-input"
                        />
                        <div className="custom-control-label">Brand new </div>
                      </label>
                      <label className="custom-control custom-radio">
                        <input
                          type="radio"
                          name="myfilter_radio"
                          className="custom-control-input"
                        />
                        <div className="custom-control-label">Used items</div>
                      </label>
                      <label className="custom-control custom-radio">
                        <input
                          type="radio"
                          name="myfilter_radio"
                          className="custom-control-input"
                        />
                        <div className="custom-control-label">Very old</div>
                      </label>
                    </div>
                  </div>
                </article>
              </div>
            </aside>
            <main className="col-md-9">
              <header className="border-bottom mb-4 pb-3">
                <div className="form-inline">
                  <span className="mr-md-auto">32 Items found </span>
                  <select className="mr-2 form-control">
                    <option>Latest items</option>
                    <option>Trending</option>
                    <option>Most Popular</option>
                    <option>Cheapest</option>
                  </select>
                  <div className="btn-group">
                    <a
                      href="#"
                      className="btn btn-outline-secondary"
                      data-toggle="tooltip"
                      title="List view"
                    >
                      <i className="fa fa-bars" />
                    </a>
                    <a
                      href="#"
                      className="btn  btn-outline-secondary active"
                      data-toggle="tooltip"
                      title="Grid view"
                    >
                      <i className="fa fa-th" />
                    </a>
                  </div>
                </div>
              </header>
              <div className="row">
                <div className="col-md-4">
                  <figure className="card card-product-grid">
                    <div className="img-wrap">
                      <span className="badge badge-danger"> NEW </span>
                      <img src="assets/images/items/1.jpg" />
                      <a className="btn-overlay" href="#">
                        <i className="fa fa-search-plus" /> Quick view
                      </a>
                    </div>
                    <figcaption className="info-wrap">
                      <div className="fix-height">
                        <a href="#" className="title">
                          Great item name goes here
                        </a>
                        <div className="price-wrap mt-2">
                          <span className="price">$1280</span>
                          <del className="price-old">$1980</del>
                        </div>
                      </div>
                      <a href="#" className="btn btn-block btn-primary">
                        Add to cart{" "}
                      </a>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-4">
                  <figure className="card card-product-grid">
                    <div className="img-wrap">
                      <img src="assets/images/items/2.jpg" />
                      <a className="btn-overlay" href="#">
                        <i className="fa fa-search-plus" /> Quick view
                      </a>
                    </div>
                    <figcaption className="info-wrap">
                      <div className="fix-height">
                        <a href="#" className="title">
                          Product name goes here just for demo item
                        </a>
                        <div className="price-wrap mt-2">
                          <span className="price">$1280</span>
                        </div>
                      </div>
                      <a href="#" className="btn btn-block btn-primary">
                        Add to cart{" "}
                      </a>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-4">
                  <figure className="card card-product-grid">
                    <div className="img-wrap">
                      <img src="assets/images/items/3.jpg" />
                      <a className="btn-overlay" href="#">
                        <i className="fa fa-search-plus" /> Quick view
                      </a>
                    </div>
                    <figcaption className="info-wrap">
                      <div className="fix-height">
                        <a href="#" className="title">
                          Product name goes here just for demo item
                        </a>
                        <div className="price-wrap mt-2">
                          <span className="price">$1280</span>
                        </div>
                      </div>
                      <a href="#" className="btn btn-block btn-primary">
                        Add to cart{" "}
                      </a>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-4">
                  <figure className="card card-product-grid">
                    <div className="img-wrap">
                      <img src="assets/images/items/4.jpg" />
                      <a className="btn-overlay" href="#">
                        <i className="fa fa-search-plus" /> Quick view
                      </a>
                    </div>
                    <figcaption className="info-wrap">
                      <div className="fix-height">
                        <a href="#" className="title">
                          Product name goes here just for demo item
                        </a>
                        <div className="price-wrap mt-2">
                          <span className="price">$1280</span>
                        </div>
                      </div>
                      <a href="#" className="btn btn-block btn-primary">
                        Add to cart{" "}
                      </a>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-4">
                  <figure className="card card-product-grid">
                    <div className="img-wrap">
                      <img src="assets/images/items/5.jpg" />
                      <a className="btn-overlay" href="#">
                        <i className="fa fa-search-plus" /> Quick view
                      </a>
                    </div>
                    <figcaption className="info-wrap">
                      <div className="fix-height">
                        <a href="#" className="title">
                          Product name goes here just for demo item
                        </a>
                        <div className="price-wrap mt-2">
                          <span className="price">$1280</span>
                        </div>
                      </div>
                      <a href="#" className="btn btn-block btn-primary">
                        Add to cart{" "}
                      </a>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-4">
                  <figure className="card card-product-grid">
                    <div className="img-wrap">
                      <img src="assets/images/items/6.jpg" />
                      <a className="btn-overlay" href="#">
                        <i className="fa fa-search-plus" /> Quick view
                      </a>
                    </div>
                    <figcaption className="info-wrap">
                      <div className="fix-height">
                        <a href="#" className="title">
                          Product name goes here just for demo item
                        </a>
                        <div className="price-wrap mt-2">
                          <span className="price">$1280</span>
                        </div>
                      </div>
                      <a href="#" className="btn btn-block btn-primary">
                        Add to cart{" "}
                      </a>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-4">
                  <figure className="card card-product-grid">
                    <div className="img-wrap">
                      <img src="assets/images/items/7.jpg" />
                      <a className="btn-overlay" href="#">
                        <i className="fa fa-search-plus" /> Quick view
                      </a>
                    </div>
                    <figcaption className="info-wrap">
                      <div className="fix-height">
                        <a href="#" className="title">
                          Product name goes here just for demo item
                        </a>
                        <div className="price-wrap mt-2">
                          <span className="price">$1280</span>
                        </div>
                      </div>
                      <a href="#" className="btn btn-block btn-primary">
                        Add to cart{" "}
                      </a>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-4">
                  <figure className="card card-product-grid">
                    <div className="img-wrap">
                      <img src="assets/images/items/1.jpg" />
                      <a className="btn-overlay" href="#">
                        <i className="fa fa-search-plus" /> Quick view
                      </a>
                    </div>
                    <figcaption className="info-wrap">
                      <div className="fix-height">
                        <a href="#" className="title">
                          Product name goes here just for demo item
                        </a>
                        <div className="price-wrap mt-2">
                          <span className="price">$1280</span>
                        </div>
                      </div>
                      <a href="#" className="btn btn-block btn-primary">
                        Add to cart{" "}
                      </a>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <nav className="mt-4" aria-label="Page navigation sample">
                <ul className="pagination">
                  <li className="page-item disabled">
                    <a className="page-link" href="#">
                      Previous
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
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
