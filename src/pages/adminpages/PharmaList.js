import "./PharmaList.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "./../../common/constants";
const PharmaList = () => {
  let count = 1;
  const [pharma, setPharma] = useState([]);
  useEffect(() => {
    getPharmas();
  }, []);

  const deletePharmaFromDB = (pharmacist) => {
    axios.delete(url + "/pharmacist/" + pharmacist.pharmacistId).then((response) => {
      const result = response.data;
      if (result.status === "success") {
        alert("Pharmacist Deleted Successfully");
        getPharmas();
      } else {
        alert("error occured while Deleting pharmacist from Database");
      }
    });
  };

  const getPharmas = () => {
    // send the GET request
    axios.get(url + "/pharmacists").then((response) => {
      const result = response.data;
      if (result.status === "success") {
        setPharma(result.data);
      } else {
        alert("error occured while getting all Users");
      }
    });
  };

  return (
    <div className="container-fluid">
      <div className="content ">
        <div className="col admin-header1  text-dark">
          <div className="user-text">
            <div className="text-set">
              <h4>
                <i>
                  <b>Pharmacist List </b>
                </i>
              </h4>
            </div>
            <br />
            <br />
            <div>
              <table id="customers">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Mobile No</th>
                    <th scope="col">License No</th>
                    <th scope="col">Pincode</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {pharma.map((pharmacist) => {
                    return (
                      <tr>
                        <td>
                          {count}
                          <input type="hidden" value={(count += 1)} />
                        </td>
                        <td>
                          {pharmacist.firstName} {pharmacist.lastName}
                        </td>
                        <td>{pharmacist.email}</td>
                        <td>{pharmacist.mobileNumber}</td>
                        <td>{pharmacist.licenseNumber}</td>
                        <td>{pharmacist.pincode}</td>
                        <td>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => {
                                deletePharmaFromDB(pharmacist);
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <br />
              <br />
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PharmaList;
