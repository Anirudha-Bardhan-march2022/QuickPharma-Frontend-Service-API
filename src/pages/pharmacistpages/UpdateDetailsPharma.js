import axios from "axios";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { url } from "../../common/constants";

const UpdateDetailsPharma = () => {
  const history = useHistory();
  const location = useLocation();
  const pharma = location.state.pharma;

  const [firstName, setFirstName] = useState(pharma.firstName);
  const [lastName, setLastName] = useState(pharma.lastName);
  const [email, setEmail] = useState(pharma.email);
  const [password, setPassword] = useState(pharma.password);
  const [mobileNumber, setMobile] = useState(pharma.mobileNumber);
  const [licenseNumber, setLicenseNumber] = useState(pharma.licenseNumber);
  const [pincode, setPincode] = useState(pharma.pincode);
  //const history = useHistory()

  const addPharmaToDB = () => {
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
    } else if (licenseNumber.length === 0) {
      // alert('enter Role')
    } else if (pincode.length === 0) {
      // alert('enter Role')
    } else {
      const data = new FormData();
      data.append("firstName", firstName);
      data.append("lastName", lastName);
      data.append("email", email);
      data.append("password", password);
      data.append("mobileNumber", mobileNumber);
      data.append("licenseNumber", licenseNumber);
      data.append("pincode", pincode);

      //send User information to the database and store it
      axios.post(url + "/registerpharma", data).then((response) => {
        const result = response.data;
        if (result.status === "success") {
          alert(" Register successfully");
          history.push("/loginpharma");
        } else {
          alert("Error While registation ..please try after some time ..");
        }
      });
    }
  };

  return (
    <div>
      <div className="card bg-light bgimg">
        <div>
          <article className="card-body mx-auto max-width">
            <h4 className="card-title mt-3 text-center ">Create Account</h4>
            <br />
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-user icon-size"></i>
                </span>
              </div>
              <input
                name=""
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                className="form-control"
                placeholder="First name"
                type="hidden"
                value={firstName}
              />
            </div>
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-user icon-size"></i>
                </span>
              </div>
              <input
                name=""
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                className="form-control"
                placeholder="Last name"
                type="hidden"
                value={lastName}
              />
            </div>
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-envelope icon-size-envelop"></i>
                </span>
              </div>
              <input
                name=""
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="form-control"
                placeholder="Email address"
                type="email"
                value={email}
              />
            </div>
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-phone icon-size"></i>
                </span>
              </div>
              <select className="custom-select">
                <option selected="">+91</option>
              </select>
              <input
                name=""
                onChange={(e) => {
                  setMobile(e.target.value);
                }}
                className="form-control"
                placeholder="Phone number"
                type="text"
                value={mobileNumber}
              />
            </div>
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-phone icon-size"></i>
                </span>
              </div>
              <input
                name=""
                onChange={(e) => {
                  setLicenseNumber(e.target.value);
                }}
                className="form-control"
                placeholder="Phone number"
                type="text"
                value={licenseNumber}
              />
            </div>
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-phone icon-size"></i>
                </span>
              </div>
              <input
                name=""
                onChange={(e) => {
                  setPincode(e.target.value);
                }}
                className="form-control"
                placeholder="Phone number"
                type="text"
                value={pincode}
              />
            </div>

            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-lock icon-size"></i>
                </span>
              </div>
              <input
                className="form-control"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Create password"
                type="password"
              />
            </div>
            <div className="form-group">
              <button
                onClick={addPharmaToDB}
                className="btn btn-primary btn-block"
              >
                Update Details
              </button>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};
export default UpdateDetailsPharma;
