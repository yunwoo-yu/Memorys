import { Link } from "react-router-dom";
import styles from "./Navigation.module.scss";
import { loginActions } from "../../store/modal";
import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux";
import { authActions } from "../../store/Auth";

const Navigation = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const loginHandler = () => {
    dispatch(loginActions.loginToggle());
  };
  const logoutHandler = () => {
    dispatch(authActions.setLogout());
  };

  return (
    <>
      <header className={styles.header}>
        <Link to="/">로고</Link>
        <nav>
          <ul>
            <li>
              <Link to="/recipe">레시피</Link>
            </li>
            <li>
              <Link to="/board">레시피 게시판</Link>
            </li>
            <li>
              <Link to="/myrecipe">나만의 레시피</Link>
            </li>
          </ul>
          <ul>
            {!isLoggedIn && (
              <li>
                <button type="button" onClick={loginHandler}>
                  로그인
                </button>
              </li>
            )}
            {isLoggedIn && (
              <li>
                <button onClick={logoutHandler}>로그아웃</button>
              </li>
            )}
            <li>
              <Link to="signup">회원가입</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Navigation;
