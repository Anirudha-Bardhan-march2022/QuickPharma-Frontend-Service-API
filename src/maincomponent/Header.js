import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";
import "./Header.css";
import axios from "axios";
import { url } from "./../common/constants";

const Header = () => {
  const history = useHistory();
  const [productName, setProductName] = useState("");
  

  const searchInDB = () => {
    axios.get(url + "/product/name/" + productName).then((response) => {
      const result = response.data;
      if (result.status === "success") {
        if (result.data.length === 0) {
          alert("You Entered product is not available");
        } else {
          history.push("/search", {
            products: result.data,
          });
        }
      } else {
        alert("Please write something in search ");
      }
    });
  };
 
  return (
    <div className="container-fluid">
      <div className="row">
        <nav className="header bg-image bg-opacity-0.5">
          <div className="col-3">
            <Link to="/home" className="nav-link">
              <h2 className="text-dark">
                Quick<i className="fa fa-thermometer-three-quarters"></i> Pharma{" "}
                <i className="fa fa-user-md"></i>
              </h2>
            </Link>
          </div>
          <div className="col ">
            <div className="header-search header-inline">
              <input
                type="search"
                placeholder="Search.."
                name="search"
                className="search form-control"
                onChange={(e) => {
                  setProductName(e.target.value);
                }}
              />
              <button type="submit" className="search-btn btn-warning" onClick={searchInDB}>
                <i className="fa fa-search "></i>
              </button>
            </div>
          </div>
          <div className="col-1">
            <Link to="/login" className="nav-link">
              <span className="text-white">
              </span>
              <i className="fa fa-shopping-cart cart-css"></i>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Header;
