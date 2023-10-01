//Importamos los componentes.
import { Route, Routes } from 'react-router-dom'
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

//Importamos las páginas.
import NoteSearchPage from "./pages/NoteSearchPage.jsx/NoteSearchPage";
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'

const App = () => {
  return (
    <div className="app">
      <Header/>
      <Routes>
        <Route path='/' element={<NoteSearchPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;