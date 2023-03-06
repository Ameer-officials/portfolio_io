import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Form from "./Components/Form";
import Login from "./Components/login/Login";
import Main from "./main";
import Projects from "./Components/projects/Projects";
import About from "./Components/about/About";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route exact path="/form" element={<Form />}></Route>
          <Route exact path="/projects" element={<Projects />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/about" element={<About/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
