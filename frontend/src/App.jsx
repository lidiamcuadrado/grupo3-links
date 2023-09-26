import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NotesList from "./components/Register/NotesList";

const App = () => {
  return (
    <div className="app">
        <Header />
        <NotesList />
        <Footer />
    </div>
  );
}

export default App;
