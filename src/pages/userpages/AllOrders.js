import "./AllOrders.css";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { url } from "./../../common/constants";
import { useHistory } from "react-router-dom";
const AllOrders = () => {
  const email = localStorage.getItem("email");
  const [orders, setOrders] = useState([]);

  //setQuantity(localStorage.getItem("quantity"));
  //console.log(localStorage.getItem("quantity"));
  useEffect(() => {
    allOrders();
  }, []);
  const history = useHistory();
  if (email === null) {
    history.push("/login");
  }
  const allOrders = () => {
    axios.get(url + "/order/allorders?email=" + email).then((response) => {
      const result = response.data;
      if (result.status === "success") {
        setOrders(result.data);
        console.log(result.data);
      } else {
        alert("Orders not found");
      }
    });
  };

  return (
    <div className="">
      <div className="bgimg-allorders">
        <br></br>
        <div className="heade">
          <h2>
            <i>
              <i class="fa fa-shopping-bag fst"></i> Your Orders
            </i>
          </h2>
        </div>
        <hr className="hr-ord"></hr>
        <div className="container">
          <div className="col-12">
            <div className="container">
              {orders.map((order) => {
                return (
                  <div className="bg-inf">
                    <div className="row">
                      <p></p>
                      <div className="col">
                        <h5> Order ID : {order.orderId}</h5>Order Placed :
                        {order.orderDate}
                      </div>
                      <div className="col">
                        <h5>Total : Rs.{order.orderAmount}</h5>
                      </div>
                      <div className="col">
                        <h5>
                          Shipped To : {order.firstName} {order.lastName}
                        </h5>
                      </div>
                    </div>

                    <div>
                      <div className="orderdetail">
                        <table className="table table-stripped table-secondary next">
                          <thead>
                            <tr className="thed">
                              <th>Product Name</th>
                              <th>Product Quantity</th>
                              <th>Price </th>
                            </tr>
                          </thead>
                          <tbody>
                            {order.product.map((product) => {
                              return (
                                <tr>
                                  <td>{product.productName}</td>
                                  <td>{product.quantity}</td>
                                  <td>{product.price * product.quantity}</td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default AllOrders;
