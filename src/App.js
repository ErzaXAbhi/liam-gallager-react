import "./App.css";
import Envoirnment from "./components/Envoirnment";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Potraits from "./components/Potraits";
import Contact from "./components/Contact";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Main>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/potraits" element={<Potraits />} />
          <Route exact path="/envo" element={<Envoirnment />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
