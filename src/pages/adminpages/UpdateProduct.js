import axios from "axios";
import { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { url } from "../../common/constants";

const UpdateProduct = () => {
  const history = useHistory();
  const location = useLocation();
  const product = location.state.product;

  const [productName, setProductName] = useState(product.productName);
  const [productTypeId, setProductTypeId] = useState(product.productTypeId);
  const [stocks, setStocks] = useState(product.stocks);
  const [price, setPrice] = useState(product.price);
  const [manufactureDate, setManufactureDate] = useState(
    product.manufactureDate
  );
  const [expiryDate, setExpiryDate] = useState(product.expiryDate);
  const [description, setDescription] = useState(product.description);
  const [thumbnail, setThumbnail] = useState(product.productThumbnail);

  console.log(product.productTypeId);
  const UpdateProductToDB = () => {
    if (productName.length === 0) {
      // alert('enter name')
    } else if (productTypeId.length === 0) {
    } else if (stocks.length === 0) {
    } else if (price.length === 0) {
    } else if (manufactureDate.length === 0) {
    } else if (expiryDate.length === 0) {
    } else if (description.length === 0) {
    } else if (!thumbnail) {
    } else {
      const data = new FormData();
      data.append("productName", productName);
      data.append("productTypeId", productTypeId);
      data.append("stocks", stocks);
      data.append("price", price);
      data.append("manufactureDate", manufactureDate);
      data.append("expiryDate", expiryDate);
      data.append("description", description);
      data.append("thumbnail", thumbnail);
      //send product  to the database and store it
      axios
        .put(url + "/product/" + product.productId, data)
        .then((response) => {
          console.log(response.data);
          const result = response.data;
          if (result.status === "success") {
            alert("Product Updated Successfully");
            history.push("/productlist");
          } else {
            alert(
              "Error While Adding product to database ..please try after some time .."
            );
          }
        });
    }
  };

  return (
    <div className="container-fluid">
      <div className="text-center">
        <br />
        <h1>Update Product</h1>
        <hr />
      </div>
      <div className=" align-center">
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">
            <b>Product Name</b>
          </label>
          <div className="col-sm-6">
            <input
              type="text"
              value={productName}
              onChange={(e) => {
                setProductName(e.target.value);
              }}
              className="form-control"
              placeholder="Enter Product Name"
            />
            <input
              type="hidden"
              value={productTypeId}
              onChange={(e) => {
                setProductTypeId(e.target.value);
              }}
              className="form-control"
              placeholder="Enter product type id."
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">
            <b>Product Stocks</b>
          </label>
          <div className="col-sm-6">
            <input
              type="number"
              value={stocks}
              onChange={(e) => {
                setStocks(e.target.value);
              }}
              className="form-control"
              placeholder="Enter Product Quantity"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">
            <b>Product Price</b>
          </label>
          <div className="col-sm-6">
            <input
              type="number"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              className="form-control"
              placeholder="Enter Product Price"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label" for="date-picker-example">
            <b>Manufacture Date</b>
          </label>
          <div className="col-sm-6">
            <input
              placeholder="Selected date"
              type="date"
              value={manufactureDate}
              onChange={(e) => {
                setManufactureDate(e.target.value);
              }}
              className="form-control"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label" for="date-picker-example">
            <b>Expiry Date</b>
          </label>
          <div className="col-sm-6">
            <input
              placeholder="Selected date"
              type="date"
              value={expiryDate}
              onChange={(e) => {
                setExpiryDate(e.target.value);
              }}
              className="form-control datepicker"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">
            <b>Product Image </b>
          </label>
          <div className="col-sm-6">
            <img
              src={url + "/" + product.productThumbnail}
              className="type-image"
            />
            <input
              type="file"
              // accept="image/*"
              onChange={(e) => {
                setThumbnail(e.target.files[0]);
              }}
              className="form-control"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">
            <b>Product Description</b>
          </label>
          <div className="col-sm-6">
            <textarea
              className="scrollabletextbox form-control"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              placeholder="Description.."
            />
          </div>
        </div>
        <div>
          <br></br>
          <button
            className="btn btn-success align-center"
            onClick={UpdateProductToDB}
          >
            Update Product
          </button>
          &nbsp; &nbsp; &nbsp;
          <Link to="/productlist">
            <button className="btn btn-warning ">Back</button>
          </Link>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};
export default UpdateProduct;
