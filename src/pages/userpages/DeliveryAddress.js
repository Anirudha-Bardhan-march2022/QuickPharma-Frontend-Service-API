import "./DeliveryAddress.css";
import axios from "axios";
import { url } from "../../common/constants";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

const DeliveryAddress = () => {
  const email = localStorage.getItem("email");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [state, setState] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [userId, setUserId] = useState("");

  const history = useHistory();

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = () => {
    axios.get(url + "/user/" + email).then((response) => {
      const result = response.data;
      if (result.status === "success") {
        setUserId(result.data.userId);
      } else {
        alert("error occured while getting user");
      }
    });
  };
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
    }else {
      const data = new FormData();
      data.append("street", street);
      data.append("city", city);
      data.append("pincode", pincode);
      data.append("state", state);
      data.append("houseNumber", houseNumber);
      data.append("userId", userId);

      //send User information to the database and store it
      axios.post(url + "/address", data).then((response) => {
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
        <h2>Delivery Address And Biling details</h2>
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
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">
            <b>Street</b>
          </label>
          <div className="col-sm-6">
            <input
              name=""
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

export default DeliveryAddress;
