import { Route, Routes } from "react-router-dom"
import './App.css';
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Header from "./components/Header";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
        <Header/>
      <Routes>
        <Route path="/notes" element={<Home />} />
        <Route path="/users/register" element={<RegisterPage />} />
        <Route path="/users/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}


export default App;