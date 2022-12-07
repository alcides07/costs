import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import Home from "./components/pages/Home"
import Sobre from "./components/pages/Sobre"
import Contato from "./components/pages/Contato"
import NovoProjeto from "./components/pages/NovoProjeto"
import Projetos from "./components/pages/Projetos"

import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import Container from './components/layout/Container'

function App() {
  return (
    <Router>

      <Navbar/>
      <Container customClass = "min-height"> 
        <Routes>
          <Route path = "/" element = {<Home/>} > </Route>
          <Route path = "/sobre" element = {<Sobre/>} > </Route>
          <Route path = "/contato" element = {<Contato/>} > </Route>
          <Route path = "/novoprojeto" element = {<NovoProjeto/>} > </Route>
          <Route path = "/projetos" element = {<Projetos/>} > </Route>
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;