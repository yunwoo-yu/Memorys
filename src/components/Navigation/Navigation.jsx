import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { loginModalToggle, logout } from "../../Reducer/Slice/userSlice";
import styles from "./Navigation.module.scss";
import React from "react";

const Navigation = () => {
  const dispatch = useDispatch();
  const loginToken = useSelector((state) => state.users.token);
  const isLogined = !!loginToken;

  const loginHandler = () => {
    dispatch(loginModalToggle());
  };
  const logoutHandler = () => {
    dispatch(logout());
    localStorage.clear();
  };
  console.log(isLogined);

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
          </ul>
          <ul>
            {!isLogined && (
              <li>
                <button type="button" onClick={loginHandler}>
                  로그인
                </button>
              </li>
            )}
            {isLogined && (
              <li>
                <button onClick={logoutHandler}>로그아웃</button>
              </li>
            )}

            {!isLogined && (
              <li>
                <NavLink
                  to="/signup"
                  className={(navData) =>
                    navData.isActive ? styles.active : ""
                  }
                >
                  회원가입
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Navigation;
