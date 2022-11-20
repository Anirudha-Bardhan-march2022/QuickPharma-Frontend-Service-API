import axios from "axios";
import "./AddProductType.css";
import "./ProductTypeList.css";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { url } from "./../../common/constants";

const AddProductType = () => {
  const [productTypeName, setProductTypeName] = useState("");
  const [typeThumbnail, setThumbnail] = useState(undefined);

  const history = useHistory();

  const AddProductTypeToDB = () => {
    if (productTypeName.length === 0) {
      // alert('enter name')
    } else if (!typeThumbnail) {
      // alert('add thumbnail')
    } else {
      const data = new FormData();
      data.append("productTypeName", productTypeName);
      data.append("typeThumbnail", typeThumbnail);

      //send productType  to the database and store it
      axios.post(url + "/type", data).then((response) => {
        const result = response.data;
        if (result.status === "success") {
          alert("ProductType Added Successfully");
          history.push("/producttypelist");
        } else {
          alert(
            "Error While Adding product Type to database ..please try after some time .."
          );
        }
      });
    }
  };

  return (
    <div className="container-fluid ">
      <div className="content bgimg-addproducttype">
        <div className="text-center">
          <br />
          <h1>Add Product Type</h1>
          <hr />
        </div>
        <div className=" align-center">
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">
              <b>Product Type Name</b>
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                onChange={(e) => {
                  setProductTypeName(e.target.value);
                }}
                className="form-control"
                placeholder="Enter Product Type Name"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">
              <b>Product Type Image</b>{" "}
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
          <br />
          <div>
            <button
              className="btn btn-success align-center"
              onClick={AddProductTypeToDB}
            >
              Add Product Type
            </button>
            &nbsp; &nbsp; &nbsp;
            <Link to="/producttypelist">
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
export default AddProductType;
