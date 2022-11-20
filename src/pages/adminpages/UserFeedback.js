import "./UserFeedback.css";
import { useEffect, useState } from 'react';
import axios from "axios";
import { url } from './../../common/constants';
import { useHistory } from 'react-router-dom';

const UserFeedback = () => {

  const [contactUs, setContactUs] = useState([]);
  useEffect(() => {
    getFeedbackFromDB();
  }, []);

  const deleteFeedbackFromDB=(contact) =>{
    axios.delete(url + "/contactus/"+contact.id).then((response) => {
      const result = response.data;
      if (result.status === "success") {
        window.location.reload(false);
      } else {
        alert("error occured while Deleting from Database");
      }
    });
  };

  
  const getFeedbackFromDB = () => {
    // send the GET request
    axios.get(url + "/contactus").then((response) => {
      const result = response.data;
      console.log(result.data)
      if (result.status === "success") {
        setContactUs(result.data);
      } else {
        alert("error occured while getting responses");
      }
    });
  };
  return (
    
    <div className="container-fluid">
      <div className="content ">
        <div className="col admin-header1  text-dark">
          <div className="user-text">
            <div className="text-set"> 
            <h4><i><b>Customer Feedback </b></i></h4>
            </div>
            <br/><br/>

            <div>
              <table id="customers">
                <thead>
                  <tr>
                    <th className='col-1' >Name</th>
                    <th className='col-3'>Email</th>
                    <th className='col-2'>Subject</th>
                    <th className='col-5'> Message</th>
                    <th className='col-1'>Action</th>
                  </tr>
                </thead>
                <tbody>
                {contactUs.map((contact) => {
                    return (
                      <tr>
                        <td>{contact.name}</td>
                        <td>{contact.email}</td>
                        <td>{contact.subject}</td>
                        <td>{contact.message}</td>
                        <td><button 
                        className="btn btn-primary"
                        onClick={() => {
                        deleteFeedbackFromDB(contact);
                        }}
                        >Resolved</button></td>
                      </tr>
                    );
                  })}
                 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserFeedback;
