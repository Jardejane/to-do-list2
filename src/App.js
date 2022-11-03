import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Pesquise } from "./pages/pesquise";
import { Registration } from "./pages/registration";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/pesquisa" element={<Pesquise/>} />
        <Route path="cadastro" element={<Registration/>} />
      </Routes>
    </Router>
  );
}

export default App;
