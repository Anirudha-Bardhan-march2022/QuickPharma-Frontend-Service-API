import "./MyAccount.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../../common/constants";
import { useHistory } from "react-router-dom";

const MyAccount = () => {
  const email = localStorage.getItem("email");

  const [user, setUser] = useState("");
  const history = useHistory();
  useEffect(() => {
    getUserData();
  }, []);
  if (email === null) {
    history.push("/login");
  }
  const updateDetails = () => {
    if (user.role === "user") {
      history.push("/updatedetails", {
        userdetail: user,
      });
    } else {
      history.push("/adminupdate", {
        userdetail: user,
      });
    }
  };
  const changePassword = () => {
    if (user.role === "user") {
      history.push("/changepassword");
    } else {
      history.push("/adminpassword");
    }
  };
  const getUserData = () => {
    axios.get(url + "/user/" + email).then((response) => {
      const result = response.data;
      console.log(result);
      if (result.status === "success") {
        setUser(result.data);
      } else {
        alert("error occured while getting user");
      }
    });
  };

  return (
    <div className=" conts-user">
      <div className="container-fluid">
        <br />
        <br />
        <div className="text-center">
          <h3>User Account Details</h3>
          <hr></hr>
        </div>
        <br />
        <div className="table">
          <table className="table table-user table-warning">
            <tr>
              <th>Id</th>
              <td>{user.userId}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>
                {user.firstName} &nbsp;
                {user.lastName}
              </td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{user.email}</td>
            </tr>
            <tr>
              <th>Mobile Number</th>
              <td>{user.mobileNumber}</td>
            </tr>
            {/* <tr>
            <th>Pasword</th>
            <td>{user.password}</td>
          </tr> */}
          </table>
        </div>
        <div className="align-center">
          <br />
          <button
            className="btn btn-primary align-center"
            onClick={() => {
              updateDetails(user);
            }}
          >
            Update Details
          </button>
          &nbsp; &nbsp; &nbsp;
          <button
            className="btn btn-info"
            onClick={() => {
              changePassword(user);
            }}
          >
            Change Password
          </button>
        </div>
        <br></br>
      </div>
    </div>
  );
};
export default MyAccount;
