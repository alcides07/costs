import { useLocation } from "react-router-dom"
import Mensagem from "../layout/Mensagem"
import styles from "./Projetos.module.css"
import Container from "../layout/Container"
import LinkButton from "../layout/LinkButton"

function Projetos(){

    const location = useLocation()
    let mensagem = ""

    if (location.state){
        mensagem = location.state.mensagem
    }

    return (
        <div className = {styles.projeto_container}>
            <div className = {styles.titulo_container}>
                <h1> Meus projetos </h1>
                <LinkButton rota = "/NovoProjeto" texto = "Criar Projeto" />
            </div>

            {mensagem && (
                <Mensagem tipo = "sucesso" msg = {mensagem} />
            )}
           
            <Container customClass = "start">
                <p> Projetos aqui... </p>
            </Container>
        </div>
    )
}

export default Projetos