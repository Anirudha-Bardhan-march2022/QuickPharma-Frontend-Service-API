import { useHistory } from "react-router-dom";
const Auth = () => {
  const email = localStorage.getItem("email");
  const role = localStorage.getItem("role");
  const history = useHistory();
  if (email === null) {
    history.push("/login");
  }
  if (role != "user" && email != null) {
    history.push("/login");
  }
  return <div></div>;
};
export default Auth;
