import "./PharmaAccount.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../../common/constants";
import { useHistory } from "react-router-dom";

const PharmaAccount = () => {
  const email = localStorage.getItem("email");

  const [pharma, setPharma] = useState("");
  const history = useHistory();
  useEffect(() => {
    getPharmaData();
  }, []);
  if (email === null) {
    history.push("/loginpharma");
  }
  const updateDetails = () => {
    history.push("/updatedetailspharma", {
      pharmadetail: pharma,
    });
  };
  const changePassword = () => {
    history.push("/changepasswordpharma");
  };
  const getPharmaData = () => {
    axios.get(url + "/pharmacist/" + email).then((response) => {
      const result = response.data;
      console.log(result);
      if (result.status === "success") {
        setPharma(result.data);
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
          <h3>Pharmacist Account Details</h3>
          <hr></hr>
        </div>
        <br />
        <div className="table">
          <table className="table table-user table-warning">
            <tr>
              <th>Id</th>
              <td>{pharma.pharmacistId}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>
                {pharma.firstName} &nbsp;
                {pharma.lastName}
              </td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{pharma.email}</td>
            </tr>
            <tr>
              <th>Mobile Number</th>
              <td>{pharma.mobileNumber}</td>
            </tr>
            <tr>
              <th>License Number</th>
              <td>{pharma.licenseNumber}</td>
            </tr>
            <tr>
              <th>Pincode</th>
              <td>{pharma.pincode}</td>
            </tr>
            {/* <tr>
            <th>Pasword</th>
            <td>{user.password}</td>
          </tr> */}
          </table>
        </div>
        <div className="align-center margin:auto">
          <br />
          <button
            className="btn btn-primary align-center"
            onClick={() => {
              updateDetails(pharma);
            }}
          >
            Update Details
          </button>
          &nbsp; &nbsp; &nbsp;
          <button
            className="btn btn-info"
            onClick={() => {
              changePassword(pharma);
            }}
          >
            Change Password
          </button>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  );
};
export default PharmaAccount;
