import { isRejected } from "@reduxjs/toolkit";

const errorMiddleware = (store) => (next) => (action) => {
  if (isRejected(action)) {
    alert("아이디와 비밀번호를 확인하세요.");
  }
};
export default errorMiddleware;
