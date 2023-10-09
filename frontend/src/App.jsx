import { Route, Routes } from "react-router-dom"
import { useNotes } from "./hooks/useNotes";
import './App.css';
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Header from "./components/Header"
import Home from "./pages/home";
import UpdateProfilePage from "./pages/UpdateProfilePage";
import { useAuth } from './hooks/useAuth';
import HomePage from "./components/main";
import AboutUs from "./pages/AboutUs";
import TrendingPage from "./pages/TrendingPage";
import NoteCreatePage from "./pages/NoteCreatePage/NoteCreatePage";

// Rutas Privadas

// Importamos los prop-types.


const App = () => {
  const { authUser } = useAuth(); 
    const { setSearchParams, loading } =
        useNotes();
  return (
    <div className="App">
        {authUser && (
        <Header
          setSearchParams={setSearchParams}
          loading={loading}
          avatar={authUser?.avatar}
        />
        )} 
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users/register" element={<RegisterPage />} />
          <Route path="/users/login" element={<LoginPage />} />
          <Route path="/notes" element={<Home />} />
          <Route path="/notes/trending" element={<TrendingPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/users/profile" element={<UpdateProfilePage />} />
          <Route path="/message" element={<NoteCreatePage />} />
      </Routes>
    </div>
  )
}


export default App;