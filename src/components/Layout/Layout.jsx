import styled from "./Layout.module.scss";
import Navigation from "../Navigation/Navigation";
// import LoginModal from "../LoginModal/LoginModal";

const Layout = (props) => {
  return (
    <>
      {/* <LoginModal /> */}
      <Navigation />
      <main className={styled.wrap}>{props.children}</main>
    </>
  );
};
export default Layout;
