import useForm from "../../hooks/useForm";
import styled from "./SignUpForm.module.scss";

const SignUpForm = ({ signUp }) => {
  const { formData, handleInputChange } = useForm({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const emailCheck =
    /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  const passwordCheck = /^[a-zA-Z0-9]{6,}$/;

  const emailIsValid = emailCheck.test(email);
  const passwordIsValid = passwordCheck.test(password);

  const emailNamefield = emailIsValid ? `${styled.on}` : "";
  const passwordNamefield = passwordIsValid ? `${styled.on}` : "";

  const submitHandler = (event) => {
    event.preventDefault();
    signUp(formData);
  };

  return (
    <section>
      <h1>로고</h1>
      <h2>회원가입</h2>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">이메일</label>
          <input
            className={emailNamefield}
            type="text"
            name="email"
            id="email"
            placeholder="이메일 형식"
            value={email}
            onChange={handleInputChange}
          />
          {emailIsValid && <span className={styled.emailok}>✔</span>}
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input
            className={passwordNamefield}
            type="password"
            name="password"
            id="password"
            placeholder="비밀번호 (6자리 이상)"
            value={password}
            onChange={handleInputChange}
          />
          {passwordIsValid ? <span className={styled.pwok}>✔</span> : null}
        </div>
        <button type="submit">가입하기</button>
      </form>
    </section>
  );
};
export default SignUpForm;
