import { Route, Routes } from "react-router-dom"
import './App.css';
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
// import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/users/register" element={<RegisterPage />} />
        <Route path="/users/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;