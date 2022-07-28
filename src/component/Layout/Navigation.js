import { Link } from "react-router-dom";
import styles from "./Navigation.module.scss";

const Navigation = (props) => {
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
            <li>
              <button type="button" onClick={props.onLogin}>
                로그인
              </button>
            </li>
            <li>
              <Link to="/">로그아웃</Link>
            </li>
            <li>
              <Link to="/">회원가입</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Navigation;
