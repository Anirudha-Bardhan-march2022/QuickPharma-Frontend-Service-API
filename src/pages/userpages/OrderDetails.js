import "./OrderDetails.css";
import { useLocation } from "react-router-dom";
const OrderDetails = () => {
  const location = useLocation();
  const order = location.state.order;
  const cartItems = location.state.cartItems;
  return (
    <div className="top">
      <br />
      <div className="container ">
        <div className="border border-secondary bgimg-addproduct">
          <div className="row ">
            <div className="col-md-12 text-center">
              <br />
              <h2 className="">Order Summary</h2>
              <div>
                <b>Date :</b>
                {order.orderDate}
              </div>
              <br />
              <h5>Order Id : {order.orderId}</h5>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-2"></div>
              <div className="col">
                <h4>
                  <strong>Contact Person Details</strong>
                </h4>
                <br />
                <p>
                  {order.firstName} {order.lastName}
                </p>
                <p>{order.email}</p>
                <p>{order.mobileNumber}</p>
              </div>
              <div className="col">
                <br />
                <div className="row">
                  <h5>Shipping Address</h5>
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
          </div>
          <hr />
          <div>
            <table id="ord">
              <thead class="thead-dark">
                <tr>
                  <th>Product Name</th>
                  <th>Product Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => {
                  return (
                    <tr>
                      <td>{item.productName}</td>
                      <td>{item.quantity}</td>
                      <td>{item.price * item.quantity}</td>
                    </tr>
                  );
                })}
              </tbody>
              <tbody>
                <tr>
                  <td colSpan="2">
                    <h6>Order Amount : Rs. {order.orderAmount}</h6>
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
           
            <br />
          </div>
          {/* <div className="row">
            <div className="col-4"></div>
            <div className="col">
              <h3>Order Amount : {order.orderAmount}</h3>
            </div>
            <br />
            <br />
          </div> */}
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default OrderDetails;
