import "./RegisterPharma.css";
import axios from "axios";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
//import { url } from "./../common/constants";
import { url } from "../../common/constants";
import toast, { Toaster } from "react-hot-toast";

const RegisterPharma = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobile] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [pincode, setPincode] = useState("");
  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobileNumber: "",
    licenseNumber: "",
    pincode: "",
  });

  const history = useHistory();

  const addUserToDB = () => {
    let errorCount = 0;
    if (firstName.length === 0) {
      errorCount++;
      //alert("enter First Name");
      setError((prevState) => {
        return { ...prevState, firstName: "Please enter the first name" };
      });
    } else if (!isNaN(firstName)) {
      setError((prevState) => {
        return { ...prevState, firstName: "Only Char is allowded" };
      });
    }

    if (lastName.length === 0) {
      errorCount++;
      //alert("enter Last Name");
      setError((prevState) => {
        return { ...prevState, lastName: "Please enter the last name" };
      });
    } else if (!isNaN(lastName)) {
      setError((prevState) => {
        return { ...prevState, lastName: "Only Char is allowded" };
      });
    }

    if (email.length === 0) {
      errorCount++;
      setError((prevState) => {
        return { ...prevState, email: "Please enter the address" };
      });
    } else if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((?!hotmail|gmail|yahoo|rediffmail|outlook)|(\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      errorCount++;
      setError((prevState) => {
        return { ...prevState, email: "invalid email" };
      });
    }
    if (password.length === 0) {
      errorCount++;
      //alert("enter Password");
      setError((prevState) => {
        return { ...prevState, password: "Please enter the password" };
      });
    }
    if (mobileNumber.length === 0) {
      errorCount++;
      //alert("enter Mobile");
      setError((prevState) => {
        return { ...prevState, mobileNumber: "Please enter the mobile number" };
      });
    } else if (!/^[6-9]\d{9}$/.test(mobileNumber)) {
      errorCount++;
      setError((prevState) => {
        return { ...prevState, mobileNumber: "invalid mobile number" };
      });
    }
    if (licenseNumber.length === 0) {
      errorCount++;
      //alert("enter Mobile");
      setError((prevState) => {
        return {
          ...prevState,
          licenseNumber: "Please enter the License number",
        };
      });
    }
    if (pincode.length === 0) {
      errorCount++;
      //alert("enter Mobile");
      setError((prevState) => {
        return {
          ...prevState,
          pincode: "Please enter Pincode",
        };
      });
    } else if (pincode.length != 6) {
      errorCount++;
      //alert("enter Mobile");
      setError((prevState) => {
        return {
          ...prevState,
          pincode: "Invalid Pincode",
        };
      });
    }


    if (errorCount === 0) {
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
          //toast.success("Successfully toasted!");
          history.push("/loginpharma");
        } else {
          alert("Error While registation ..please try after some time ..");
          //toast.error("This didn't work.");
        }
      });
    }
  };

  return (
    <div>
      <div className="card bg-light bgimgp">
        <div className="registerp-container">
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
                type="text"
              />
            </div>
            {error.firstName && (
              <p style={{ color: "red" }}>{error.firstName}</p>
            )}
            <div className="form-group input-group mt-3">
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
                type="text"
              />
            </div>
            {error.lastName && <p style={{ color: "red" }}>{error.lastName}</p>}
            <div className="form-group input-group mt-3">
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
              />
            </div>
            {error.email && <p style={{ color: "red" }}>{error.email}</p>}
            <div className="form-group input-group mt-3">
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
                type="tel"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              />
            </div>
            {error.mobileNumber && (
              <p style={{ color: "red" }}>{error.mobileNumber}</p>
            )}

            <div className="form-group input-group mt-3">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-id-card"></i>
                </span>
              </div>
              <input
                name=""
                onChange={(e) => {
                  setLicenseNumber(e.target.value);
                }}
                className="form-control"
                placeholder="License Number"
                type="text"
              />
            </div>
            {error.licenseNumber && (
              <p style={{ color: "red" }}>{error.licenseNumber}</p>
            )}


            <div className="form-group input-group mt-3">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-map-marker"></i>
                </span>
              </div>
              <input
                name=""
                onChange={(e) => {
                  setPincode(e.target.value);
                }}
                className="form-control"
                placeholder="Pincode"
                type="number"
              />
            </div>
            {error.pincode && <p style={{ color: "red" }}>{error.pincode}</p>}


            <div className="form-group input-group mt-3">
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
            {error.password && <p style={{ color: "red" }}>{error.password}</p>}
            <div className="form-group">
              <button onClick={addUserToDB} className="btn btn-primary">
                Create Account
              </button>
            </div>
            <Toaster />
            <p className="text-center mt-3">
              Have an account?
              <Link to="/loginpharma">
                <b>Log In</b>
              </Link>
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};
export default RegisterPharma;
