import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./component/Layout/Layout";
import Recipe from "./pages/Recipe";
import Board from "./pages/Board";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="recipe" element={<Recipe />} />
          <Route path="board" element={<Board />} />
        </Routes>
      </Layout>
    </>
  );
}
export default App;
