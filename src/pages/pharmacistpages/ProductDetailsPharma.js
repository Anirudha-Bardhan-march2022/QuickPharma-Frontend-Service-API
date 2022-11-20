import { useHistory, useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "../ProductDetails.css";
import { url } from "../../common/constants";

const ProductDetailsPharma = () => {
  const location = useLocation();
  const item = location.state.item;
  const email = localStorage.getItem("email");
  const history = useHistory();

  return (
    <div className="container-fluid product-details-bg-image">
      <br />
      <div className="text-center">
        <h2>Product Details</h2>
        <hr></hr>
      </div>
      <div className="align-center row">
        <div className="col-2 productinfo-2">
          <img
            src={url + "/" + item.productThumbnail}
            className="image-thumbnail product-image"
          ></img>
        </div>
        <div className=" col">
          <div className=" productinfo-1">
            <div className="row ">
              <div className="col-3">
                <b>Product Name</b>
              </div>
              <div className="col-9">{item.productName}</div>
            </div>
            <br></br>
            <br></br>
            <div className="row">
              <div className="col-3">
                <b>Expire Date</b>
              </div>
              <div className="col-9">{item.expiryDate}</div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="desc align-center">
        <h5>Description</h5>
      </div>
      <div className="desc align-center">
        <p>{item.description}</p>
      </div>
      <br />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};
export default ProductDetailsPharma;
