import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="justify-content-center d-flex">
        <div className="card-name">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/240px-Mastercard_2019_logo.svg.png"
            alt="mastercard"
          />
        </div>
        <div className="card-name">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/240px-Mastercard_2019_logo.svg.png"
            alt="visa"
          />
        </div>
        <div className="card-name">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/240px-Mastercard_2019_logo.svg.png"
            alt="paypal"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
