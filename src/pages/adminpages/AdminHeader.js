import { Link } from "react-router-dom";
import "./AdminHeader.css";

const AdminHeader = () => {
  
  return (
    <div class="sidebar">
      <br />
      <h3>
        <center>
          Quick<i className="fa fa-thermometer-three-quarters"></i>
        </center>
        <center>
          <i class="fa fa-plus"></i> Pharma <i className="fa fa-plus"></i>
        </center>
      </h3>
      <br />
      <Link
        to="/admin"
        aria-current="page"
      >
        <i className="fa fa-fw fa-home"></i> Home
      </Link>
      <Link
        to="/producttypelist"
        aria-current="page"
      >
        <i className="fa fa-arrow-circle-right"></i> Product Type List
      </Link>
      <Link
        to="/productlist"
        aria-current="page"
      >
        <i className="fa fa-arrow-circle-right"></i> Product List
      </Link>
      <Link
        to="/orderlist"
        aria-current="page"
      >
        <i className="fa fa-arrow-circle-right"></i> Order List
      </Link>
      <Link
        to="/userlist"
        aria-current="page"
      >
        <i className="fa fa-user-circle"></i> User List
      </Link>
      <Link
        to="/pharmalist"
        aria-current="page"
      >
        <i className="fa fa-medkit"></i> Pharmacist List
      </Link>
      <Link
        to="/feedback"
        aria-current="page"
      >
        <i class="fa fa-user-circle"></i> User Feedback
      </Link>
      
    </div>
  );
};
export default AdminHeader;
