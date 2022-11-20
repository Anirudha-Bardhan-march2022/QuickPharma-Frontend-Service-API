import { useHistory, useLocation } from "react-router-dom";
import { url } from "./../common/constants";
import "./ProductDetails.css";
import { useState } from "react";
import axios from "axios";

const ProductDetails = () => {
  const location = useLocation();
  const item = location.state.item;
  const email = localStorage.getItem("email");
  const history = useHistory();

  const [quantity, setQuantity] = useState(1);
  const [productId, setProductId] = useState(item.productId);

  const handleincrement = () => {
    if (quantity < 10) {
      setQuantity((prevCount) => prevCount + 1);
    }
  };

  const handledecrement = () => {
    if (quantity > 1) {
      setQuantity((prevCount) => prevCount - 1);
    }
  };

  const addToCart = () => {
    if (quantity.length === 0) {
    } else if (productId.length === 0) {
    } else {
      const data = new FormData();
      data.append("quantity", quantity);
      data.append("productId", productId);
      axios.post(url + "/cartitem/" + email, data).then((response) => {
        const result = response.data;
        if (result.status === "success") {
          alert("Product Added in cart");
          history.push("/homeuser");
        } else {
          history.push("/login");
        }
      });
    }
  };

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
            <div className="row">
              <div className="col-3">
                <b>Price</b>
              </div>
              <div className="col-9">Rs.{item.price}</div>
            </div>
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
      &nbsp; &nbsp; &nbsp; &nbsp;
      <button
        className="btn btn-success align-center"
        onClick={() => {
          addToCart(item);
        }}
      >
        Add To Cart{" "}
      </button>
      <button type="button" onClick={handleincrement} className="plus">
        +
      </button>
      <div className="plus">{quantity}</div>
      <button type="button" onClick={handledecrement} className="plus">
        -
      </button>
      <br />
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
export default ProductDetails;
