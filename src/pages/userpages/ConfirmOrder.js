import "./ConfirmOrder.css";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { url } from "../../common/constants";
import { useEffect, useState } from "react";

const ConfirmOrder = () => {
  const email = localStorage.getItem("email");
  const location = useLocation();
  const userId = location.state.userId;
  const history = useHistory();
  const [cartDetails, setCartDetails] = useState([]);
  const [quantity, setQuantity] = useState({});
  let totalPrice = 0;
  let count = 1;
  useEffect(() => {
    getProductsFromCart();
  }, []);
  const getProductsFromCart = () => {
    axios.get(url + "/cartitem/" + email).then((response) => {
      const result = response.data;
      if (result.data.length === 0) {
        alert("Cart is Empty");
      } else if (result.status === "success") {
        setCartDetails(result.data);
      } else {
        alert("error occured while getting  cart items");
      }
    });
  };
  const placeOrder = () => {
    const data = new FormData();
    data.append("userId", userId);
    axios.post(url + "/order/add", data).then((response) => {
      console.log(data);
      const result = response.data;
      if (result.status === "success") {
        alert(" Order Placed");
        history.push("/orderdetails", {
          order: result.data,
          cartItems: cartDetails,
        });
      } else {
        alert("Error While placing Order");
      }
    });
  };

  return (
    <div className="container-fluid user-details-bg-image">
      <center>
        <br></br>
        <h3 className="">Please Confirm Order</h3>
        <hr></hr>
        <div>
          <div className="ordertable">
            <table className="table table-order table-danger table-striped align-middle align-center">
              <thead>
                <tr>
                  <th>Sr. No</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {cartDetails.map((item) => {
                  return (
                    <tr>
                      <td>
                        {count}
                        <input value={(count += 1)} type="hidden" />
                      </td>

                      <td>
                        <div>
                          <img
                            src={url + "/" + item.thumbnail}
                            className="imagethumnail"
                          />
                        </div>
                      </td>
                      <td>{item.productName}</td>
                      <td>{item.quantity}</td>
                      <td>
                        {item.price * item.quantity}
                        <input
                          type="hidden"
                          value={(totalPrice += item.price * item.quantity)}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="margin-order">
          Total Amount :Rs.<h4>{totalPrice}</h4>
        </div>
        <div className="">
          <button className="btn btn-outline-success " onClick={placeOrder}>
            Place Order
          </button>
          &nbsp;&nbsp;
          <Link to="cartitems">
            <button className="btn btn-outline-warning">Back To Cart</button>
          </Link>
          &nbsp;&nbsp;
          <Link to="homeuser">
            <button type="button" className="btn btn-outline-primary">
              Continue Shopping{" "}
            </button>
          </Link>
          <br />
          <br />
          <br />
          <br />
        </div>
      </center>
    </div>
  );
};

export default ConfirmOrder;
