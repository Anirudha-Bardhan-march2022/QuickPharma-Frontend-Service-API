import {  Link } from "react-router-dom";
import "./NavbarUser.css";
import Cookies from "js-cookie";
  const NavbarUser = () => {
    const firstName=Cookies.get('firstName')
    const localStorageSession = () => {
      localStorage.clear();
      Cookies.remove('firstName')
      sessionStorage.clear()
    };
    
 
  return (
    <div className="adjust">
      <nav className="navbar navbar-expand-lg height">
        <div className="container-fluid">
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
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item li">
                <Link
                  to="/homeuser"
                  className="nav-link active text-white"
                  aria-current="page"
                >
                  <i className="fa fa-fw fa-home"></i>Home
                </Link>
              </li>
              <li className="nav-item li">
                <Link
                  to="/aboutuser"
                  className="nav-link active text-white"
                  aria-current="page"
                >
                  <i className="fa fa-align-justify"></i> About
                </Link>
              </li>
              <li className="nav-item li">
                <Link
                  to="/productlistuser"
                  className="nav-link active text-white"
                  aria-current="page"
                >
                  <i className="fa fa-plus lib"></i> All Medicines
                </Link>
              </li>
              <li className="nav-item li">
                <Link
                  to="/allorders"
                  className="nav-link active text-white"
                  aria-current="page"
                >
                  <i className="fa fa-shopping-bag"></i> Orders
                </Link>
              </li>
              <li className="nav-item li">
                <Link
                  to="/myaccount"
                  className="nav-link active text-white"
                  aria-current="page"
                >
                  <i className="fa fa-fw fa-user"></i>My Account
                </Link>
              </li>
              <li className="nav-item li">
                <Link
                  to="/contactususer"
                  className="nav-link active text-white"
                  aria-current="page"
                >
                  <i className="fa fa-fw fa-envelope"></i> Contact Us
                </Link>
              </li>
              <li className="nav-item la">
                <div className="lagimg">
                <div class="w3-dropdown-hover">
                <button className="button1"><h5><i><i class="fa fa-user-circle"></i> Hi, {firstName}</i></h5></button>
                <div className="w3-dropdown-content w3-bar-block w3-border">
                <Link to='/myaccount' className="w3-bar-item w3-button" 
                >
                  <i class="fa fa-user"></i> My Profile
                </Link>
                <Link to='/home' className="w3-bar-item w3-button" onClick={localStorageSession}
                >
                  <i className="fa fa-sign-out"></i> Logout
                </Link>
              </div>
            </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavbarUser;
