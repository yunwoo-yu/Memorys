import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import LoginModal from "../../components/LoginModal/LoginModal";

const LoginModalContainer = () => {
  const loginToggle = useSelector((state) => state.users.loginToggle);
  return (
    <>
      {ReactDOM.createPortal(
        loginToggle && <LoginModal />,
        document.getElementById("modal-root")
      )}
    </>
  );
};
export default LoginModalContainer;
