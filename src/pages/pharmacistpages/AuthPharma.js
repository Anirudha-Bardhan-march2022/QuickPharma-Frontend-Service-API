import { useHistory } from "react-router-dom";
const AuthPharma = () => {
  const email = localStorage.getItem("email");
  const history = useHistory();
  if (email === null) {
    history.push("/loginpharma");
  }
  return <div></div>;
};
export default AuthPharma;
