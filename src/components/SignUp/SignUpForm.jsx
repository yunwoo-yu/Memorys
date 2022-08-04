import { useState } from "react";
import { useSelector } from "react-redux";

const SignUpForm = ({ signUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loading = useSelector((state) => state.user.loading);

  const signUpData = {
    email: email,
    password: password,
  };

  const submitHandler = (event) => {
    event.preventDefault();
    signUp(signUpData);
    console.log(signUpData);
  };

  return (
    <section>
      <h1>로고</h1>
      <h2>회원가입</h2>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">이메일</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="pw">비밀번호</label>
          <input
            type="password"
            id="pw"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">가입하기</button>
      </form>
    </section>
  );
};
export default SignUpForm;
