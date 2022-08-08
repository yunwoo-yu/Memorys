import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginModalToggle } from "../../Reducer/Slice/userSlice";
import LoginModal from "../../components/LoginModal/LoginModal";
import useForm from "../../hooks/useForm";
import { userLogin } from "../../Reducer/Slice/userSlice";
import { useEffect } from "react";

const LoginModalContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginToggle = useSelector((state) => state.users.loginToggle);
  const loginToken = useSelector((state) => state.users.token);

  const { formData, handleInputChange } = useForm({
    email: "",
    password: "",
  });

  const loginCloseHandler = () => {
    dispatch(loginModalToggle());
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(userLogin(formData));
    dispatch(loginModalToggle());
    localStorage.setItem("token", loginToken);
  };

  return (
    <>
      {ReactDOM.createPortal(
        loginToggle && (
          <LoginModal
            closeClick={loginCloseHandler}
            formData={formData}
            onSubmit={submitHandler}
            onInput={handleInputChange}
          />
        ),
        document.getElementById("modal-root")
      )}
    </>
  );
};
export default LoginModalContainer;
