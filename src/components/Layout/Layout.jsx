import styled from "./Layout.module.scss";
import Navigation from "../Navigation/Navigation";
import LoginModalContainer from "../../containers/LoginModalContainer/LoginModalContainer";

const Layout = (props) => {
  return (
    <>
      <LoginModalContainer />
      <Navigation />
      <main className={styled.wrap}>{props.children}</main>
    </>
  );
};
export default Layout;
