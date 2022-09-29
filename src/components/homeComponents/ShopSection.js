import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Pagination from "./pagination";
import products from "../../data/Products";

export default function ShopSection() {
  return (
    <>
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col-lg-12 col-md-12 article">
              <div className="shopcontainer row">
                {/* Rendering products here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
