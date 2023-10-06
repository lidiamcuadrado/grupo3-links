import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Header from "./components/Header";
import Home from "./pages/home";
import NoteCreatePage from "./pages/NoteCreatePage/NoteCreatePage.jsx";
// import UpdateProfilePage from "./pages/UpdateProfilePage";

const App = () => {
  const [isAuthenticated] = useState(false);
  return (
    <div className="App">
      <Header isAuthenticated={isAuthenticated} path="/notes" />
      <Routes>
        <Route path="/notes" element={<Home />} />
        <Route path="/users/register" element={<RegisterPage />} />
        <Route path="/users/login" element={<LoginPage />} />
        <Route path="/message" element={<NoteCreatePage />} />
        {/* <Route path="/users/profile" element={<UpdateProfilePage />} /> */}
      </Routes>
    </div>
  );
};

export default App;
