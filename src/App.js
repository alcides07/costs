import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import Home from "./components/pages/Home/Index"
import Sobre from "./components/pages/Sobre/Index"
import Contato from "./components/pages/Contato/Index"
import NovoProjeto from "./components/pages/Novo_Projeto/Index"
import Projetos from "./components/pages/Projetos/Index"
import Navbar from "./components/layout/Navbar/Index"
import Footer from "./components/layout/Footer/Index"
import Container from './components/layout/Container/Index'
import Projeto_detalhes from './components/pages/Projeto_Detalhes/Index'

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
          <Route path = "/projeto/:id" element = {<Projeto_detalhes/>} > </Route>
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;