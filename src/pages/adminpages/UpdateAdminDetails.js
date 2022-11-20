import "./UpdateAdminDetails.css";
import { Link, useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { url } from "./../../common/constants";

const UpdateAdminDetails = () => {
  const location = useLocation();
  const userdetail = location.state.userdetail;
  const [userId, setUserId] = useState(userdetail.userId);
  const [firstName, setFirstName] = useState(userdetail.firstName);
  const [lastName, setLastName] = useState(userdetail.lastName);
  const [email, setEmail] = useState(userdetail.email);
  const [password, setPassword] = useState(userdetail.password);
  const [mobileNumber, setMobile] = useState(userdetail.mobileNumber);
  const [role, setRole] = useState(userdetail.role);

  const history = useHistory();

  const updateUser = () => {
    if (firstName.length === 0) {
      // alert('enter First Name')
    } else if (lastName.length === 0) {
      // alert('enter Last Name')
    } else if (email.length === 0) {
      // alert('enter Email')
    } else if (password.length === 0) {
      // alert('enter Password')
    } else if (mobileNumber.length === 0) {
      // alert('enter Mobile')
    } else if (role.length === 0) {
      // alert('enter Role')
    } else {
      const data = new FormData();
      data.append("userId", userId);
      data.append("firstName", firstName);
      data.append("lastName", lastName);
      data.append("email", email);
      data.append("password", password);
      data.append("mobileNumber", mobileNumber);
      data.append("role", role);

      //send User information to the database and store it
      axios.post(url + "/user", data).then((response) => {
        const result = response.data;
        if (result.status === "success") {
          alert("Deatils Updated");
          history.push("/adminprofile");
        } else {
          alert("Error While update ..please try after some time ..");
        }
      });
    }
  };
  return (
    <div className="container-fluid user-details">
      <div className="head-1">
        <h4>
          <i>
            <b>Update Details</b>
          </i>
        </h4>
        <hr
          className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
          style={{ width: "600px" }}
        ></hr>
      </div>
      <div className="details">
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">
            <b>First Name</b>
          </label>
          <div className="col-sm-6">
            <input
              className="scrollabletextbox form-control"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <input
              className="scrollabletextbox form-control"
              value={role}
              type="hidden"
              onChange={(e) => {
                setRole(e.target.value);
              }}
            />
            <input
              className="scrollabletextbox form-control"
              value={userId}
              type="hidden"
              onChange={(e) => {
                setUserId(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">
            <b>Last Name</b>
          </label>
          <div className="col-sm-6">
            <input
              className="scrollabletextbox form-control"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">
            <b>Email</b>
          </label>
          <div className="col-sm-6">
            <input
              className="scrollabletextbox form-control"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">
            <b>Mobile Number</b>
          </label>
          <div className="col-sm-6">
            <input
              className="scrollabletextbox form-control"
              value={mobileNumber}
              onChange={(e) => {
                setMobile(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="row mb-3">
          {/* <label className="col-sm-2 col-form-label">
            <b>password</b>
          </label> */}
          <div className="col-sm-6">
            <input type='hidden'
              className="scrollabletextbox form-control"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
        </div>
        <div>
          <button className="btn btn-success align-center" onClick={updateUser}>
            Update
          </button>
          &nbsp; &nbsp; &nbsp;
          <Link to="/admin">
            <button className="btn btn-warning ">Back</button>
          </Link>
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};
export default UpdateAdminDetails;
