import ReactDOM from "react-dom";
import styled from "./LoginModal.module.scss";

const LoginForm = (props) => {
  return (
    <>
      <div className={styled.backdrop} onClick={props.onLogin} />
      <div className={styled.modal}>
        <header>
          <button>X</button>
        </header>
        <form>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" />
          <label htmlFor="password">Password</label>
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
