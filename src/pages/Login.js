import "./Login.css";
import axios from "axios";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { url } from "./../common/constants";
import React from "react";
import Cookies from "js-cookie";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const [error, setError] = useState({
    email: "",
    password: "",
  });
  const userAuthFromDB = () => {
    let errorCount = 0;
    if (email.length === 0) {
      errorCount++;
      setError((prevState) => {
        return { ...prevState, email: "Please enter the Emailaddress" };
      });
    }
    if (password.length === 0) {
      errorCount++;
      setError((prevState) => {
        return { ...prevState, password: "Please enter the password" };
      });
    }
    if (errorCount == 0) {
      const data = new FormData();
      data.append("email", email);
      data.append("password", password);

      //send email and password for authentication of user from our database.
      axios.post(url + "/login", data).then((response) => {
        const result = response.data;
        if (result.status === "success") {
          console.log(result);
          alert("Login Successfull");
          Cookies.set("firstName", result.data.firstName);
          sessionStorage.setItem("userId", result.data.userId);
          localStorage.setItem("email", email);
          if (result.data.role === "user") {
            localStorage.setItem("role", result.data.role);
            history.push("/homeuser");
          } else {
            localStorage.setItem("role", result.data.role);
            history.push("/admin");
          }
        } else {
          // alert(result.error)
          console.log(response.error);
          alert("Login failed ....");
        }
      });
    }
  };

  return (
    <div className="card bg-light bgim">
      <div className="wrapper">
        <div className="form-signin login-container">
          <h2 className="form-signin-heading">Sign In</h2>
          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fa fa-envelope icon-size-envelope"></i>
              </span>
            </div>
            <input
              type="text"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="form-control"
              name="username"
              placeholder="Email Address"
              required=""
              autofocus=""
            />
          </div>
          {error.email && <p style={{ color: "red" }}>{error.email}</p>}
          <div className="form-group input-group mt-3">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fa fa-lock icon-size-lock"></i>
              </span>
            </div>

            <input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="form-control"
              name="password"
              placeholder="Password"
              required=""
            />
          </div>
          {error.password && <p style={{ color: "red" }}>{error.password}</p>}
          <div>
            {/* <label className="checkbox">
              <input
                type="checkbox"
                value="remember-me"
                id="rememberMe"
                name="rememberMe"
              />
              Remember me
            </label> */}
            <button
              onClick={userAuthFromDB}
              className="btn btn-lg btn-primary btn-block"
            >
              Login
            </button>
          </div>
          <br />
          <div>
            <Link to="/register">
              <b>Create new account</b>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
