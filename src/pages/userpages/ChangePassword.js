import "./ChangePassword.css"
import { useState } from 'react';
import  axios  from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { url } from './../../common/constants';

const ChangePassword = () => {
    const [password, setPassword]=useState('');
    const [newPassword, setNewPassword]=useState('');
    const email = localStorage.getItem("email");
    const history = useHistory()
  const UpdatePassword = () => {
    if (password.length === 0) {
       alert('enter password')
    } else if (newPassword.length === 0) {
       alert('enter new Password')
    } else {
      const data = new FormData();
      data.append("password", password);
      data.append("newPassword", newPassword);
      axios.post(url + "/reset-password/"+email, data).then((response) => {
        const result = response.data;
        if (result.status === "success") {
          alert("Password Updated Successfully");
          history.push("/login");
        } else {
          alert("Check old password ...try again");
        }
      });
    }
  };
    return (
        <div className="pwd">
      <br /><br/><br/>
      <div className="text-center">
        <h3>Change Password</h3>
        <hr></hr>
      </div>
      <div className="align-center">
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">
            <b>Old Password</b>
          </label>
          <div className="col-sm-6">
            <input type='password'
              className="scrollabletextbox form-control"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
           
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">
            <b>New Password</b>
          </label>
          <div className="col-sm-6">
            <input type='password'
              className="scrollabletextbox form-control"
              onChange={(e) => {
                setNewPassword(e.target.value);
              }}
            />
          </div>
        </div>
     
        <div className="align-center">
         <button className="btn btn-success" onClick={UpdatePassword} >
            Update Password
          </button>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <Link to='/myaccount'>
          <button className="btn btn-warning">
            Back
          </button>
          </Link>
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
    )
}

export default ChangePassword
