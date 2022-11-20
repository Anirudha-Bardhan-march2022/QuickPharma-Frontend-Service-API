import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "./../../common/constants";
import "./OrderList.css";

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getAllOrdersFromDb();
  }, []);

  const getAllOrdersFromDb = () => {
    axios.get(url + "/order/admin/allorders").then((response) => {
      const result = response.data;
      if (result.status === "success") {
        setOrders(result.data);
      } else {
        alert("Orders not found");
      }
    });
  };
  return (
    <div className="container-fluid">
      <div className="content">
        <div className="col admin-header1  text-dark">
          <div>
            <div className="container">
              <div>
                <div>
                  {orders.map((order) => {
                    return (
                      <div className="bg-info bg-opacity-10">
                        <div className="row">
                          <div className="col art">
                            <h4>Order ID: {order.orderId}</h4>
                            <h5>Order Placed :{order.orderDate}</h5>
                            <h4>Contact Person</h4>
                            {order.firstName} {order.lastName}
                            <p>{order.email}</p>
                            <p>{order.mobileNumber}</p>
                          </div>

                          <div className="col art">
                            <div className="row">
                              <h5>Shipping Address</h5>
                              <div className="col-4"></div>
                              <div className="col-4">
                                <table>
                                  <tr>
                                    <th>Flat/House:</th>
                                    <td>{order.houseNumber}</td>
                                  </tr>
                                  <tr>
                                    <th>Street:</th>
                                    <td>{order.street}</td>
                                  </tr>
                                  <tr>
                                    <th>City:</th>
                                    <td>{order.city}</td>
                                  </tr>
                                  <tr>
                                    <th>Pincode:</th>
                                    <td>{order.pincode}</td>
                                  </tr>
                                  <tr>
                                    <th>State:</th>
                                    <td>{order.state}</td>
                                  </tr>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      <hr/>
                        <div className="table-light row">
                          <div className="col"></div>
                          <div className="col-9">
                            <table id="ad-ord">
                              <thead>
                                <tr>
                                  <th>Product Name</th>
                                  <th>Product Quantity</th>
                                  <th>Product Price</th>
                                  <th>Total Price</th>
                                </tr>
                              </thead>
                              <tbody>
                                {order.product.map((product) => {
                                  return (
                                    <tr>
                                      <td>{product.productName}</td>
                                      <td>{product.quantity}</td>
                                      <td>{product.price}</td>
                                      <td>{product.price*product.quantity}</td>
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </table>
                          </div>
                          <div className="col"></div>
                        </div>
                        <br/>
                        <div className="col">
                          <h4>Total:Rs.{order.orderAmount}</h4>
                        </div>
                        <br/>
                        <hr/>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderList;
