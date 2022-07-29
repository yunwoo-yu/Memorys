import { useSelector } from "react-redux/es/hooks/useSelector";

import styled from "./Layout.module.scss";
import Navigation from "./Navigation";
import LoginModal from "../UI/LoginModal/LoginModal";

const Layout = (props) => {
  const login = useSelector((state) => state.login.showLogin);

  return (
    <>
      {login && <LoginModal />}
      <Navigation />
      <main className={styled.wrap}>{props.children}</main>
    </>
  );
};
export default Layout;
