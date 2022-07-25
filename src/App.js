<<<<<<< HEAD
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
=======
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
>>>>>>> 8422ab92d1102dc11c92ff97f77daec7eca29487
  );
}

export default App;
