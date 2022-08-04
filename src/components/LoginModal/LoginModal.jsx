import ReactDOM from "react-dom";

import { useRef } from "react";

import styled from "./LoginModal.module.scss";

const LoginForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const loginHandler = () => {};

  const submitHandler = (event) => {
    event.preventDefault();
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
