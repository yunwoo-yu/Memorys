import { isFulfilled, isRejected } from "@reduxjs/toolkit";

const errorMiddleware = (store) => (next) => (action) => {
  if (isRejected(action)) {
    if (action.type === "user/userSignUp/rejected") {
      alert("아이디와 비밀번호를 확인해주세요.");
    }
  } else if (isFulfilled(action)) {
    if (action.type === "user/userSignUp/fulfilled") {
      alert("회원가입이 완료 되었습니다.");
    }
  }
  return next(action);
};
export default errorMiddleware;
