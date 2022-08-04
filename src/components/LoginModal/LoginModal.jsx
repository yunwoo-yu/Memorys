import ReactDOM from "react-dom";

import { useRef } from "react";

import styled from "./LoginModal.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { loginModalToggle } from "../../Reducer/Slice/userSlice";

const LoginModal = () => {
  const dispatch = useDispatch();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const loginCloseHandler = () => {
    dispatch(loginModalToggle());
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className={styled.backdrop} onClick={loginCloseHandler} />
      <div className={styled.modal}>
        <header>
          <h2>로고</h2>
          <button onClick={loginCloseHandler}>X</button>
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

export default LoginModal;
