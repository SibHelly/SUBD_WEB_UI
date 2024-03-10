import "./Login.css";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Provider/authProvider";

const Login = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    setToken("Test");
    navigate("/", { replace: true });
  };

  setTimeout(() => {
    handleLogin();
  }, 1 * 1000);
};
export default Login;
