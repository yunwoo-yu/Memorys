import ReactDOM from "react-dom";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { loginActions } from "../../../store/modal";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { apis } from "../../../api/axios-api";

import styled from "./LoginModal.module.scss";
import { authActions } from "../../../store/Auth";
import { useSelector } from "react-redux";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const token = useSelector((state) => state.auth.token);

  const loginHandler = () => {
    dispatch(loginActions.loginToggle());
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const authData = {
      email: enteredEmail,
      password: enteredPassword,
      returnSecureToken: true,
    };

    apis
      .createPost(authData)
      .then((res) => {
        alert("로그인 성공");
        dispatch(authActions.setLogin(res.data.idToken));
        dispatch(loginActions.loginToggle());
        navigate("/");
        console.log(res.data.idToken);
        console.log(token);
      })
      .catch((error) => {
        alert("로그인에 실패 했습니다.\n" + error.message);
        navigate("/");
      });
  };

  return (
    <>
      <div className={styled.backdrop} onClick={loginHandler} />
      <div className={styled.modal}>
        <header>
          <h2>로고</h2>
          <button onClick={loginHandler}>X</button>
        </header>
        <form onSubmit={submitHandler}>
          <label htmlFor="email">이메일</label>
          <input type="text" id="email" ref={emailInputRef} />
          <label htmlFor="password">비밀번호</label>
          <input type="password" id="password" ref={passwordInputRef} />
          <button type="submit">로그인</button>
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
