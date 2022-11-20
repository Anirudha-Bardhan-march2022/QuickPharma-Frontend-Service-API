import "./UserList.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "./../../common/constants";
const UserList = () => {
  let count = 1;
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  const deleteUserFromDB = (user) => {
    axios.delete(url + "/user/" + user.userId).then((response) => {
      const result = response.data;
      if (result.status === "success") {
        alert("User Deleted Successfully");
        getUsers();
      } else {
        alert("error occured while Deleting user from Database");
      }
    });
  };

  const getUsers = () => {
    // send the GET request
    axios.get(url + "/users").then((response) => {
      const result = response.data;
      if (result.status === "success") {
        setUsers(result.data);
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
                  <b>User List </b>
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
                    <th scope="col">Role</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => {
                    return (
                      <tr>
                        <td>
                          {count}
                          <input type="hidden" value={(count += 1)} />
                        </td>
                        <td>
                          {user.firstName} {user.lastName}
                        </td>
                        <td>{user.email}</td>
                        <td>{user.mobileNumber}</td>
                        <td>{user.role}</td>
                        <td>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => {
                              deleteUserFromDB(user);
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
              <button className="btn btn-success">
                <a href="addadmin">Add Admin</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserList;
