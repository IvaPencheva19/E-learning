import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar_welcome/Navbar";
import Welcome from "./pages/welcome/Welcome";

import "./App.scss";

function App() {
  return (
    <div id="box">
      <Navbar />

      <main id="main-content">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;
