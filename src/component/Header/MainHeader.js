import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <div>
      <div>쿠King</div>
      <div>
        <Link to="/">Home</Link>
        <Link to="">레시피</Link>
        <Link to="">레시피 공유</Link>
        <Link to="">나만의 레시피 등록</Link>
      </div>
    </div>
  );
};
export default MainHeader;
