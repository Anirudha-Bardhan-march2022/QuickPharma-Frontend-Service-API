import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="adjust">
      <nav className="navbar navbar-expand-lg height">
        <div className="container-fluid ">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item li">
                <Link
                  to="/home"
                  className="nav-link active text-white"
                  aria-current="page"
                >
                  <i className="fa fa-fw fa-home"></i>Home
                </Link>
              </li>
              <li className="nav-item li">
                <Link
                  to="/about"
                  className="nav-link active text-white"
                  aria-current="page"
                >
                  <i className="fa fa-align-justify"></i> About
                </Link>
              </li>
              <li className="nav-item li">
                <Link
                  to="/allproduct"
                  className="nav-link active text-white"
                  aria-current="page"
                >
                  <i className="fa fa-plus"></i> All Medicines
                </Link>
              </li>
              <li className="nav-item li">
                <Link
                  to="/register"
                  className="nav-link active text-white"
                  aria-current="page"
                >
                  <i className="fa fa-address-book"></i> Register
                </Link>
              </li>
              <li className="nav-item li">
                <Link
                  to="/login"
                  className="nav-link active text-white"
                  aria-current="page"
                >
                  <i className="fa fa-fw fa-user"></i>Login
                </Link>
              </li>
              <li className="nav-item li">
                <Link
                  to="/contactus"
                  className="nav-link active text-white"
                  aria-current="page"
                >
                  <i className="fa fa-fw fa-envelope"></i> Contact Us
                </Link>
              </li>
              <li className="nav-item li">
                <Link
                  to="/loginpharma"
                  className="nav-link active text-white"
                  aria-current="page"
                >
                  <i className="fa fa-medkit"></i> Pharmacist Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
