import ReactDOM from "react-dom";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { loginActions } from "../../../store/login";

import styled from "./LoginModal.module.scss";

const LoginForm = (props) => {
  const dispatch = useDispatch();

  const loginHandler = () => {
    dispatch(loginActions.loginToggle());
  };

  return (
    <>
      <div className={styled.backdrop} onClick={loginHandler} />
      <div className={styled.modal}>
        <header>
          <h2>로고</h2>
          <button onClick={loginHandler}>X</button>
        </header>
        <form>
          <label htmlFor="email">이메일</label>
          <input type="text" id="email" />
          <label htmlFor="password">비밀번호</label>
          <input type="password" id="password" />
        </form>
      </div>
    </>
  );
};

const LoginModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <LoginForm onLogin={props.onLogin} />,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default LoginModal;
