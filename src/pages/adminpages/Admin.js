import "./Admin.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "./../../common/constants";
import AdminPageHeader from "./AdminPageHeader";

const Admin = () => {
  const email = localStorage.getItem("email");
  const [user, setUser] = useState("");

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = () => {
    axios.get(url + "/user/" + email).then((response) => {
      const result = response.data;
      if (result.status === "success") {
        setUser(result.data);
      } else {
        //alert("please login first !");
      }
    });
  };

  const [users, setUsersCount] = useState([]);
  useEffect(() => {
    getUsersCount();
  }, []);

  const getUsersCount = () => {
    // send the GET request
    axios.get(url + "/usercount").then((response) => {
      const result = response.data;
      console.log(result.data);
      if (result.status === "success") {
        setUsersCount(result.data);
      } else {
        alert("error occured while getting  Users count");
      }
    });
  };

  const [products, setProductCount] = useState([]);
  useEffect(() => {
    getProductCount();
  }, []);

  const getProductCount = () => {
    // send the GET request
    axios.get(url + "/product/productcount").then((response) => {
      const result = response.data;
      console.log(result.data);
      if (result.status === "success") {
        setProductCount(result.data);
      } else {
        alert("Error while getting product count");
      }
    });
  };

  const [pharmacists, setPharmacistCount] = useState([]);
  useEffect(() => {
    getPharmacistsCount();
  }, []);

  const getPharmacistsCount = () => {
    // send the GET request
    axios.get(url + "/pharmacistcount").then((response) => {
      const result = response.data;
      console.log(result.data);
      if (result.status === "success") {
        setPharmacistCount(result.data);
      } else {
        alert("error occured while getting  Users count");
      }
    });
  };

  return (
    <div className="container-fluid color">
      <div>
        {/* className="content" */}
        <div className="col admin-header1  text-black">
          <div>
            <br />
            <AdminPageHeader />
            <div className="row">
              <div className="col-s">
                
                  <div className="usr">
                <h4>Users: {users}</h4></div>
                <p>Total active user</p>
                
              </div>
              <div className="col-p">
                <div className='box'> 
                <h4 >Products: {products}</h4>
                <p>Total available products</p>
                </div>
              </div>
              <div className="col-q">
                <div className='pharma'> 
                <h4 >Pharmacists: {pharmacists}</h4>
                <p>Total active pharmacists</p>
                </div>
              </div>
              <div className="icon">
                <center><i class="fa fa-user-md"></i></center>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Admin;
