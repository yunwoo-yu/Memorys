import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./pages/Header";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </main>
    </>
  );
}
export default App;
