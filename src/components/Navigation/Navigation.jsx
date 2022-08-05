import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { loginModalToggle } from "../../Reducer/Slice/userSlice";
import styles from "./Navigation.module.scss";
import React from "react";

const Navigation = () => {
  const dispatch = useDispatch();

  const loginHandler = () => {
    dispatch(loginModalToggle());
    console.log(loginModalToggle);
  };
  const logoutHandler = () => {};

  return (
    <>
      <header className={styles.header}>
        <Link to="/">로고</Link>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/recipe"
                className={(navData) => (navData.isActive ? styles.active : "")}
              >
                레시피
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/board"
                className={(navData) => (navData.isActive ? styles.active : "")}
              >
                레시피 게시판
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/myrecipe"
                className={(navData) => (navData.isActive ? styles.active : "")}
              >
                나만의 레시피
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <button type="button" onClick={loginHandler}>
                로그인
              </button>
            </li>
            <li>
              <button onClick={logoutHandler}>로그아웃</button>
            </li>

            <li>
              <NavLink
                to="/signup"
                className={(navData) => (navData.isActive ? styles.active : "")}
              >
                회원가입
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Navigation;
