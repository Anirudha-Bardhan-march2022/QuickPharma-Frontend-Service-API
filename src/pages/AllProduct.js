import "./AllProduct.css";
import { url } from "./../common/constants";
import ProductSlider from "./../component/ProductSlider";
import { useState, useEffect } from "react";
import axios from "axios";

const AllProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAllProducts();
  }, []);
  const getAllProducts = () => {
    axios.get(url + "/product").then((response) => {
      const result = response.data;
      if (result.status === "success") {
        setProducts(result.data);
      } else {
        alert("error occured while getting Types of Products");
      }
    });
  };
  return (
    <div className="all-product-bg-image container-fluid">
      <br/>
      <div className="row">
        {products.map((product) => {
          return (
            <div className="col-3"><ProductSlider product={product} /></div>
          );
        })}
      </div>
      <br/>
    </div>
  );
};
export default AllProduct;
