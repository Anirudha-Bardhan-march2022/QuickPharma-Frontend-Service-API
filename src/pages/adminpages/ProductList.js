import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "./../../common/constants";
import { useHistory } from "react-router-dom";

const ProductList = () => {
  const history = useHistory();
  let count = 1;
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProductsFromDB();
  }, []);

  const updateProductToDB = (product) => {
    console.log(product);
    history.push("/updateproduct", {
      product: product,
    });
  };

  const deleteProductFromDB = (product) => {
    axios.delete(url + "/product/" + product.productId).then((response) => {
      const result = response.data;
      if (result.status === "success") {
        alert("product Deleted Successfully");
        getProductsFromDB();
      } else {
        alert("error occured while Deleting Product from Database");
      }
    });
  };

  const getProductsFromDB = () => {
    // send the GET request
    axios.get(url + "/product").then((response) => {
      const result = response.data;
      console.log(result.data);//producttypeId no recieved
      if (result.status === "success") {
        setProducts(result.data);
      } else {
        alert("error occured while getting Products");
      }
    });
  };
  return (
    <div className="container-fluid">
      <div className="content ">
        <div className="col admin-header1  text-dark">
          <div className="user-text">
            <div className="text-set">
              <h4>
                <i>
                  <b>Product List </b>
                </i>
              </h4>
            </div>
            <br />
            <br />
            <div>
              <table id="customers">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Quantity</th>
                    <th> price</th>
                    <th>update</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => {
                    return (
                      <tr>
                        <td>
                          {count}
                          <input type="hidden" value={(count += 1)} />
                        </td>
                        <td>{product.productName}</td>
                        <td>
                          <img
                            src={url + "/" + product.productThumbnail}
                            className="type-image"
                          />
                        </td>
                        <td>{product.stocks}</td>
                        <td>{product.price}</td>
                        <td>
                          <button
                            className="btn btn-warning btn-sm"
                            onClick={() => {
                              updateProductToDB(product);
                            }}
                          >
                            Update
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => {
                              deleteProductFromDB(product);
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <br />
              <br />
              <button className="btn btn-success">
                <a href="addproduct">Add Product</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductList;
