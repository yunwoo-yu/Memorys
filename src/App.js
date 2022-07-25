import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainHeader from "./component/Header/MainHeader";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
