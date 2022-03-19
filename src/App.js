import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import Public from "./Modifires/Public";
// import Private from "./Modifires/Private";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Navigation from "./pages/Navigation";
import Home from "./pages/Home";
import Public from "./Modifires/Public";
import Private from "./Modifires/Private";
import { useState } from "react";
import Admin from "./pages/Admin";

function App() {
  const [overlay, setOverlay] = useState(
    JSON.parse(window.localStorage.getItem("overlay"))
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation overlay={overlay} />}>
          <Route path="/" element={<Private />}>
            <Route path="/home" element={<Home />} />
          </Route>
          <Route path="/" element={<Public setOverlay={setOverlay} />}>
            <Route path="/login" element={<Login />} />
            <Route index path="/signup" element={<Signup />} />
            <Route path="/admin" element={<Admin />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
