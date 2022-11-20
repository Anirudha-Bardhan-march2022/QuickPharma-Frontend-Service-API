import { useHistory } from "react-router-dom";
const AuthAdmin = () => {
  const email = localStorage.getItem("email");
  const role = localStorage.getItem("role");
  const history = useHistory();
  if (email === null) {
    history.push("/login");
  }
  if (role != "admin" && email != null) {
    history.push("/login");
  }
  return <div></div>;
};
export default AuthAdmin;
