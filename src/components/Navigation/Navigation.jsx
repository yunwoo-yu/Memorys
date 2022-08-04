import { Link, NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";

const Navigation = () => {
  const loginHandler = () => {};
  const logoutHandler = () => {};

  return (
    <>
      <header className={styles.header}>
        <Link to="/">로고</Link>
        <nav>
          <ul>
            <li>
              <NavLink
                className={(navData) => (navData.isActive ? styles.active : "")}
                to="/recipe"
              >
                레시피
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(navData) => (navData.isActive ? styles.active : "")}
                to="/board"
              >
                레시피 게시판
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(navData) => (navData.isActive ? styles.active : "")}
                to="/myrecipe"
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
                className={(navData) => (navData.isActive ? styles.active : "")}
                to="/signup"
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
