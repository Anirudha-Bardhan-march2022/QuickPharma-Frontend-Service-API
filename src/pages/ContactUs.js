import axios from "axios";
import "./Contactus.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { url } from "./../common/constants";

const ContactUs = () => {
  const [name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const history = useHistory();

  const addRemarkToDB = () => {
    if (name.length === 0) {
      // alert('enter First Name')
    } else if (email.length === 0) {
      // alert('enter Email')
    } else if (subject.length === 0) {
      // alert('enter Password')
    } else if (message.length === 0) {
      // alert('enter Role')
    } else {
      const data = new FormData();
      data.append("name", name);
      data.append("email", email);
      data.append("subject", subject);
      data.append("message", message);

      //send User information to the database and store it
      axios.post(url + "/contactus", data).then((response) => {
        const result = response.data;
        if (result.status === "success") {
          alert(" FeedBack Submitted ");
          history.push('/contactus')
        } else {
          alert("Error While Submitting ..please try after some time ..");
        }
      });
    }
  };

  return (
    <div>
      <div className="section cont-bg-image">
        <div className="container ">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title style">
                <h2 className="title text-white">
                  <br />
                  Contact Us
                </h2>
                <p className="style text-white">
                  Let us know what you think! In order to provide better
                  service, please do not hesitate to give us your feedback.
                  Thank you.
                </p>
                <hr className="text-white" />
                <br />
                  <div className="form-group">
                    <div className="row">
                      <div className="col-md-6">
                        <p>
                          <label className="text-white">Name :</label>
                          <input
                            type="text"
                            required
                            className="form-control setimg"
                            onChange={(e) => {
                              setFullName(e.target.value);
                            }}
                          />
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>
                          <label className="text-white">Email :</label>
                          <input
                            type="email"
                            required
                            className="form-control setimg"
                            aria-describedby="emailHelp"
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <p>
                      <label className="text-white">Subject :</label>
                      <input
                        type="text"
                        required
                        className="form-control setimg"
                        onChange={(e) => {
                          setSubject(e.target.value);
                        }}
                      />
                    </p>
                  </div>
                  <div className="form-group">
                    <p>
                      <label className="text-white">message :</label>
                      <textarea
                        className="form-control "
                        required
                        rows="3"
                        onChange={(e) => {
                          setMessage(e.target.value);
                        }}
                      />
                    </p>
                  </div>
                  <button
                    onClick={addRemarkToDB}
                    type="submit"
                    className="btn btn-success"
                  >
                    Submit
                  </button>
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
