import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Header from "./components/Header";
import Home from "./pages/Home";
import NoteCreatePage from "./pages/NoteCreatePage/NoteCreatePage.jsx";
import { useState } from "react";

const App = () => {
  
  // Estado para rastrear si el usuario está autenticado o no
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Función para establecer el estado de autenticación
  const setAuthStatus = (status) => {
    setIsAuthenticated(status);
  };

  return (
    <div className="App">
      {/* Mostrar el Header solo si el usuario está autenticado */}
      {isAuthenticated && <Header />}

      <Routes>
        <Route
        // Aqui he cambiado el path de "/notes" a "/" para que la ruta principal sea la de la home y funciones. He intendo hacer que la ruta de "/notes" se incluya tambien utilizando  path={["/", "/notes"]} pero no me ha funcionado.
          path="/"
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
        <Route
          path="/message"
          element={
            isAuthenticated ? <NoteCreatePage /> : <Navigate to="/users/login" />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
