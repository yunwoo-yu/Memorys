import styled from "./LoginModal.module.scss";

const LoginModal = ({ closeClick, formData, onInput, onSubmit }) => {
  const { email, password } = formData;

  return (
    <>
      <div className={styled.backdrop} onClick={closeClick} />
      <div className={styled.modal}>
        <header>
          <h2>로그인</h2>
          <button onClick={closeClick}>X</button>
        </header>
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="email">이메일</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={onInput}
            />
          </div>
          <div>
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={onInput}
            />
          </div>
          <button type="submit">로그인</button>
        </form>
      </div>
    </>
  );
};

export default LoginModal;
