import "./AddProduct.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { url } from "./../../common/constants";

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [productTypeId, setProductTypeId] = useState("");
  const [stocks, setStocks] = useState("");
  const [price, setPrice] = useState("");
  const [manufactureDate, setManufactureDate] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState(undefined);

  const [productTypes, setProductTypes] = useState([]);

  useEffect(() => {
    getProductTypesFromDB();
  }, []);

  const history = useHistory();

  const getProductTypesFromDB = () => {
    // send the GET request
    axios.get(url + "/type").then((response) => {
      const result = response.data;
      console.log(result.data);
      if (result.status === "success") {
        setProductTypes(result.data);
      } else {
        alert("error occured while getting ProductTypes");
      }
    });
  };

  const AddProductToDB = () => {
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
      axios.post(url + "/product", data).then((response) => {
        const result = response.data;
        if (result.status === "success") {
          alert("Product Added Successfully");
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
    <div className="container-fluid ">
      <div className="content bgimg-addproduct">
        <div className="text-center">
          <br />
          <h1>Add Product</h1>
          <hr />
        </div>
        <div className=" align-center">
          <div className="row mb-2">
            <label className="col-sm-3 col-form-label">
              <b>Product Name</b>
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                onChange={(e) => {
                  setProductName(e.target.value);
                }}
                className="form-control"
                placeholder="Enter Product Name"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-3 col-form-label">
              <b>Product Type Id</b>
            </label>
            <div className="col-sm-6">
              <select
                class="form-select form-select-sm"
                aria-label=".form-select-lg example"
                value={productTypeId}
                onChange={(e) => {
                  setProductTypeId(e.target.value);
                }}
              >
                <option selected>Poduct Type</option>
                {productTypes.map((productT) => {
                  return (
                    <option value={productT.productTypeId}>
                      {productT.producttypeName}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-3 col-form-label">
              <b>Product Stocks</b>
            </label>
            <div className="col-sm-6">
              <input
                type="number"
                onChange={(e) => {
                  setStocks(e.target.value);
                }}
                className="form-control"
                placeholder="Enter Product Quantity"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-3 col-form-label">
              <b>Product Price</b>
            </label>
            <div className="col-sm-6">
              <input
                type="number"
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                className="form-control"
                placeholder="Enter Product Price"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label
              className="col-sm-3 col-form-label"
              for="date-picker-example"
            >
              <b>Manufacture Date</b>
            </label>
            <div className="col-sm-6">
              <input
                placeholder="Selected date"
                type="date"
                onChange={(e) => {
                  setManufactureDate(e.target.value);
                }}
                className="form-control"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label
              className="col-sm-3 col-form-label"
              for="date-picker-example"
            >
              <b>Expiry Date</b>
            </label>
            <div className="col-sm-6">
              <input
                placeholder="Selected date"
                type="date"
                onChange={(e) => {
                  setExpiryDate(e.target.value);
                }}
                className="form-control datepicker"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-3 col-form-label">
              <b>Product Image </b>
            </label>
            <div className="col-sm-6">
              <input
                type="file"
                onChange={(e) => {
                  setThumbnail(e.target.files[0]);
                }}
                className="form-control"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-3 col-form-label">
              <b>Product Description</b>
            </label>
            <div className="col-sm-6">
              <textarea
                className="scrollabletextbox form-control"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                placeholder="Description.."
              />
            </div>
          </div>
          <br />
          <div>
            <button
              className="btn btn-success align-center"
              onClick={AddProductToDB}
            >
              Add Product
            </button>
            &nbsp; &nbsp; &nbsp;
            <Link to="/productlist">
              <button className="btn btn-warning ">Back</button>
            </Link>
          </div>
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};
export default AddProduct;
