import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Recipe from "./pages/Recipe";
import Board from "./pages/Board";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="recipe" element={<Recipe />} />
          <Route path="board" element={<Board />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
      </Layout>
    </>
  );
}
export default App;
