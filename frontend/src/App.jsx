
import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import { Route, Routes } from "react-router-dom";

import "./App.css";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Header from "./components/Header";

import Home from "./pages/Home";
// import NoteSearchPage from "./pages/NoteSearchPage/NoteSearchPage.jsx";

const App = () => {
  // Estado para rastrear si el usuario está autenticado o no
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Función para establecer el estado de autenticación
  const setAuthStatus = (status) => {
    setIsAuthenticated(status);
  };

import Home from "./pages/home";
import NoteCreatePage from "./pages/NoteCreatePage/NoteCreatePage.jsx";


  return (
    <div className="App">

      {/* Mostrar el Header solo si el usuario está autenticado */}
      {isAuthenticated && <Header />}

      <Routes>
        <Route
          path="/"
          // Aqui se usa solo "/" en lugar de "/notes". Y ambos juntos, utiizando  path={["/", "/notes"]}, no me funciona.
          element={
            isAuthenticated ? <Home /> : <Navigate to="/users/login" />
          }
        />
        <Route
          path="/users/register"
          element={
            !isAuthenticated ? (
              <RegisterPage setAuthStatus={setAuthStatus} />
            ) : (
              <Navigate to="/notes" />
            )
          }
        />
        <Route
          path="/users/login"
          element={
            !isAuthenticated ? (
              <LoginPage setAuthStatus={setAuthStatus} />
            ) : (
              <Navigate to="/notes" />
            )
          }
        />
        {/* <Route
          path="/message"
          element={
            isAuthenticated ? <NoteSearchPage /> : <Navigate to="/users/login" />
          }
        /> */}

      <Header />
      <Routes>
        <Route path="/notes" element={<Home />} />
        <Route path="/users/register" element={<RegisterPage />} />
        <Route path="/users/login" element={<LoginPage />} />
        <Route path="/message" element={<NoteCreatePage />} />

      </Routes>
    </div>
  );
};

export default App;
