import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const authData = {
      email: enteredEmail,
      password: enteredPassword,
      returnSecureToken: true,
    };

    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAzWdv8N5eIaLBRsRyn72jCngr5AQPQs4k",
        authData
      )
      .then((res) => {
        alert("회원가입이 완료되었습니다.");
        navigate("/");
      })
      .catch((error) => {
        alert("회원가입에 실패 했습니다.\n" + error.message);
        navigate("/signup");
      });
  };

  return (
    <section>
      <h1>로고</h1>
      <h2>회원가입</h2>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">이메일</label>
          <input type="text" id="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="pw">비밀번호</label>
          <input type="password" id="pw" ref={passwordInputRef} />
        </div>
        <button type="submit">가입하기</button>
      </form>
    </section>
  );
};
export default SignUpForm;
