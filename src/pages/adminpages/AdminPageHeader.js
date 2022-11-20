import "./AdminPageHeader.css";
import Cookies from "js-cookie";
import { Link } from 'react-router-dom';

const AdminPageHeader = () => {
    const firstName=Cookies.get('firstName')
      const localStorageSession = () => {
        localStorage.clear();
        Cookies.remove('firstName')
        sessionStorage.clear()
      };
    
    return (
        <div className="setter">
          <h2 className="mx-4">Admin</h2>
        <div className="head">
          
          <div className="w3-dropdown-hover">
          <button className="button"><h5><i><i className="fa fa-fw fa-user"></i>{firstName}</i></h5></button>
          <div className="w3-dropdown-content w3-bar-block w3-border">
          <Link to='/adminprofile' className="w3-bar-item w3-button"
          ><i className="fa fa-user"></i> My Profile </Link>
          <Link to='/home' className="w3-bar-item w3-button" onClick={localStorageSession}
          ><i className="fa fa-sign-out"></i> Logout</Link>
          </div>
        </div>
        </div>
        <hr></hr>
            
            <br/>
        </div>
    );

};
export default AdminPageHeader;