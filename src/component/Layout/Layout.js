import Navigation from "./Navigation";
import styled from "./Layout.module.scss";
import LoginModal from "../UI/LoginModal/LoginModal";
import { useState } from "react";

const Layout = (props) => {
  const [login, setLogin] = useState(false);

  const loginHandler = () => {
    setLogin((prevlogin) => !prevlogin);
  };

  return (
    <>
      {login && <LoginModal onLogin={loginHandler} />}
      <Navigation onLogin={loginHandler} />
      <main className={styled.wrap}>{props.children}</main>
    </>
  );
};
export default Layout;
