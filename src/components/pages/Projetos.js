import styles from "./Projetos.module.css"
import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"

import Mensagem from "../layout/Mensagem"
import Container from "../layout/Container"
import LinkButton from "../layout/LinkButton"
import Loading from "../layout/Loading"

import CardProjeto from "../projeto/CardProjeto"

function Projetos(){

    const [projetos, setProjetos] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)
    const [projeto_mensagem, set_projeto_mensagem] = useState("")
    
    const location = useLocation()
    let mensagem = ""

    if (location.state){
        mensagem = location.state.mensagem
    }

    useEffect(() => {
        setTimeout(() => {

        fetch("http://localhost:5000/projetos",
            {
                method: "GET",
                headers: {
                    "Content-Type" : "application/json",
                }, 
            }
        )
        . then(resposta => resposta.json())
        . then((dados) => {
            setProjetos(dados)
            setRemoveLoading(true)
        })
        .catch(erro => console.log(erro))
        }, 300)
    }, [])

    function remover_projeto(id_projeto){
        fetch(`http://localhost:5000/projetos/${id_projeto}`, 
            {
                method: "DELETE",
                headers : {
                    "Content-Type" : "application json"
                }
            }
        )
        .then(resposta => resposta.json())
        .then(() => {
            setProjetos(projetos.filter(
                (projeto) => projeto.id !== id_projeto)
            )
            set_projeto_mensagem("Projeto removido com sucesso!")
        })
        .catch(erro => console.log(erro))
    }

    return (
        <div className = {styles.projeto_container}>
            <div className = {styles.titulo_container}>
                <h1> Meus projetos </h1>
                <LinkButton rota = "/NovoProjeto" texto = "Criar Projeto" />
            </div>

            {/* Há mensagem de criação de projeto */}
            {mensagem && (<Mensagem tipo = "sucesso" msg = {mensagem} />)}
            {projeto_mensagem && (<Mensagem tipo = "sucesso" msg = {projeto_mensagem} />)}
           
            <Container customClass = "start">
                {/* Há projetos cadastrados */}
                {projetos.length > 0 && 
                    projetos.map((projeto) => (
                        <CardProjeto 
                        id = {projeto.id}
                        nome = {projeto.nome}
                        orcamento = {projeto.orcamento}
                        categoria = {projeto.categoria.nome}
                        key = {projeto.id}
                        handleRemove = {remover_projeto}
                        />
                    ))
                } 

                {/* Mostrando loader */}
                {!removeLoading && <Loading/>}
    
                {/* O loader sumiu e não há projetos cadastrados */}
                {removeLoading && projetos.length === 0 && (
                    <p> Não há projetos cadastrados! </p>
                )}
            </Container>
        </div>
    )
}

export default Projetos