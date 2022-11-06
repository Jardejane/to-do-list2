import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Pesquise } from "./pages/pesquise";
import { Registration } from "./pages/registration";
import {Header} from './components/header'
import {Footer} from './components/footer'
import{Update} from './pages/update'

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/pesquisa" element={<Pesquise/>} />
        <Route path="/cadastro" element={<Registration/>} />
        <Route path= "/edit/:_id" element = {<Update/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
