import axios from "axios";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { url } from "./../common/constants";

const UpdateDetails = () => {
  const history = useHistory();
  const location = useLocation();
  const user = location.state.user;

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [mobileNumber, setMobile] = useState(user.mobileNumber);
  const [role, setRole] = useState("user");

  //const history = useHistory()

  const addUserToDB = () => {
    console.log(role);
    console.log(firstName);
    console.log(lastName);
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
          alert(" Register successfully");
          history.push("/login");
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
              <input
                name=""
                value="user"
                onChange={(e) => {
                  setRole(e.target.value);
                }}
                className="form-control"
                type="hidden"
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
                onClick={addUserToDB}
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
export default UpdateDetails;
