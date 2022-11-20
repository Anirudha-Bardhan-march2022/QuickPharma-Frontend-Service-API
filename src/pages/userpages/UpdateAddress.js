import "./DeliveryAddress.css";
import axios from "axios";
import { url } from "../../common/constants";
import { useHistory, useLocation } from "react-router-dom";
import { useState } from "react";

const UpdateAddress = () => {
  const location = useLocation();
  const address = location.state.userAddress;
  const [addressId, setAddressId] = useState(address.addressId);
  const [street, setStreet] = useState(address.street);
  const [city, setCity] = useState(address.city);
  const [pincode, setPincode] = useState(address.pincode);
  const [state, setState] = useState(address.state);
  const [houseNumber, setHouseNumber] = useState(address.houseNumber);
  const [userId, setUserId] = useState(address.userId);
  const history = useHistory();
  const addAddressToDB = () => {
    if (houseNumber.length === 0) {
      alert("fill houseNumber");
    } else if (street.length === 0) {
      alert("fill street");
    } else if (city.length === 0) {
      alert("fill city");
    } else if (pincode.length === 0) {
      alert("fill pincode");
    } else if (state.length === 0) {
      alert("fill state");
    } else if (userId.length === 0) {
      alert("fill userId");
      alert(userId);
    } else {
      const data = new FormData();
      data.append("street", street);
      data.append("city", city);
      data.append("pincode", pincode);
      data.append("state", state);
      data.append("houseNumber", houseNumber);
      data.append("userId", userId);

      //send User information to the database and store it
      axios.put(url + "/address/update/" + addressId, data).then((response) => {
        const result = response.data;
        if (result.status === "success") {
          alert(" Address Added successfully");
          history.push("/confirmorder",{
            userId:userId,
          });
        } else {
          alert("Error While Adding Address ..please try after some time ..");
        }
      });
    }
  };
  return (
    <div className="container-fluid user-details-bg-image">
      <br />
      <div className="text-center">
        <h2>Delivery Address</h2>
        <hr></hr>
      </div>
      <div className="align-center">
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">
            <b>House/Flat No</b>
          </label>
          <div className="col-sm-6">
            <input
              name=""
              value={houseNumber}
              onChange={(e) => {
                setHouseNumber(e.target.value);
              }}
              className="form-control"
              placeholder="Enter house number...."
              type="number"
            />
            <input
              name=""
              value={userId}
              onChange={(e) => {
                setUserId(e.target.value);
              }}
              className="form-control"
              placeholder="Enter house number...."
              type="hidden"
            />
            <input
              name=""
              value={addressId}
              onChange={(e) => {
                setAddressId(e.target.value);
              }}
              className="form-control"
              placeholder="Enter house number...."
              type="hidden"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">
            <b>Street</b>
          </label>
          <div className="col-sm-6">
            <input
              name=""
              value={street}
              onChange={(e) => {
                setStreet(e.target.value);
              }}
              className="form-control"
              placeholder="Enter street...."
              type="text"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">
            <b>City</b>
          </label>
          <div className="col-sm-6">
            <input
              name=""
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
              className="form-control"
              placeholder="Enter city ...."
              type="text"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">
            <b>Pincode</b>
          </label>
          <div className="col-sm-6">
            <input
              name=""
              value={pincode}
              onChange={(e) => {
                setPincode(e.target.value);
              }}
              className="form-control"
              placeholder="Enter pincode ...."
              type="number"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">
            <b>State</b>
          </label>
          <div className="col-sm-6">
            <input
              name=""
              value={state}
              onChange={(e) => {
                setState(e.target.value);
              }}
              className="form-control"
              placeholder="Enter state ...."
              type="text"
            />
          </div>
        </div>
        <div>
          <button
            className="btn btn-success align-center"
            onClick={addAddressToDB}
          >
            Add Address
          </button>
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default UpdateAddress;
