import "./Cart.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { url } from "./../../common/constants";

const Cart = () => {
  const [cartDetails, setCartDetails] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const email = localStorage.getItem("email");
  const userId = sessionStorage.getItem("userId");
  const history = useHistory();
  let totalPrice = 0;
  let count = 1;
  useEffect(() => {
    getProductsFromCart();
  }, []);
  const getUserAddress = () => {
    axios.get(url + "/address/" + userId).then((response) => {
      const result = response.data;
      if (result.status === "success") {
        if (cartDetails.length === 0) {
          alert("cart should not be empty ..!!");
          history.push("/cartitems");
        } else {
          history.push("/updateaddress", { userAddress: result.data });
        }
      } else {
        if (cartDetails.length === 0) {
          alert("cart should not be empty ..!!");
          history.push("/cartitems");
        } else {
          history.push("/deliveryaddress");
        }
      }
    });
  };

  const clearCart = () => {
    axios.delete(url + "/cartitem/" + email).then((response) => {
      const result = response.data;
      if (result.status === "success") {
        window.location.reload(false);
        alert("Cart Clear SuccessFully");
      } else {
        alert("error occured ");
      }
    });
  };
  const getProductsFromCart = () => {
    axios.get(url + "/cartitem/" + email).then((response) => {
      const result = response.data;
      if (result.data.length === 0) {
        // alert("Cart is Empty");
      } else if (result.status === "success") {
        setCartDetails(result.data);
      } else {
        alert("error occured while getting  cart items");
      }
    });
  };
  const removeFromCart = (item) => {
    axios
      .delete(url + "/cartitem?cartItemId=" + item.cartId + "&email=" + email)
      .then((response) => {
        const result = response.data;
        if (result.status === "success") {
          alert("Product Removed from Cart");
          window.location.reload(false);
        } else {
          alert("error for removing porduct from cart");
        }
      });
  };

  return (
    <div className="container-fluid user-details-bg-image">
      <div className="text-center">
        <br />
        <h1>My Cart</h1>
        <hr />
        <div className="table ">
          <table className="table table-cart table-danger table-striped align-middle align-center">
            <thead>
              <tr className="">
                <th>Product Id</th>
                <th>Image</th>
                <th>Name</th>
                {/*<th>Quantity</th>*/}
                <th>Price</th>
                <th>Action</th>
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
                          alt="thumbnail"
                          className="imagethumnail"
                        />
                      </div>
                    </td>
                    <td>{item.productName}</td>
                    {/*<td>{item.quantity}</td>*/}

                    {/*<td>
                      <button type="button" onClick={handleincrement}>
                        +
                      </button>
                      <div>{quantity}</div>
                      <button type="button" onClick={handledecrement}>
                        -
                      </button>
                </td>*/}

                    <td>
                      {item.price * item.quantity}
                      <input
                        value={(totalPrice += item.price * item.quantity)}
                        type="hidden"
                      />
                    </td>

                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => {
                          removeFromCart(item);
                        }}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <br></br>

        <div className="row">
          <div className="col-1"></div>
          <div className="col">
            <button className="btn btn-success " onClick={getUserAddress}>
              Check Out
            </button>
          </div>
          <div className="col-3">
            Total Price :Rs.{" "}
            <b>
              <h4>{totalPrice}</h4>
            </b>
          </div>
          <div className="col">
            <button className="btn btn-primary" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </div>
        <br></br>
      </div>
    </div>
  );
};

export default Cart;
