import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

import styles from "./Styles.module.css"

import Loading from "../../layout/Loading/Index"
import Container from "../../layout/Container/Index"

function Projeto_detalhes(){
    const { id } = useParams()
    const [projeto, set_projeto] = useState([])
    const [form_projeto, set_form_projeto] = useState(false)

    useEffect(() => 
        {
            setTimeout(() => {
                fetch(`http://localhost:5000/projetos/${id}`, {
                    method: "GET",
                    headers: {
                        "Content-Type" : "application/json",
                    },
                })
                .then((resposta) => resposta.json())
                .then((dados) => set_projeto(dados))
                .catch((erro) => console.log(erro))
            }, 300)

        }, [id]
    )

    function visualizacao_form_projeto(){
        set_form_projeto(!form_projeto)
    }

    return (
        <>
            { projeto.nome ? 
                (
                    <div className = {styles.projeto_detalhe}>
                        <Container customClass = "column"> 

                            <div className = {styles.detalhes_container}>
                                <h1> {projeto.nome} </h1>
                                <button onClick = {visualizacao_form_projeto} className = {styles.botao}> 
                                    {
                                        !form_projeto ? "Editar Projeto" : "Fechar"
                                    }
                                </button>

                                { !form_projeto ? 
                                    (
                                        <div className = {styles.informacoes_projeto}> 
                                            <p> 
                                                <span> Categoria: </span>
                                                { projeto.categoria.nome }
                                            </p>

                                            <p>
                                                <span> Total do Orçamento: </span>
                                                R$ { projeto.orcamento }
                                            </p>

                                            <p>
                                                <span> Total Utilizado: </span>
                                                R$ { projeto.custo }
                                            </p>
                                        </div>
                                    )

                                :
                                    (
                                        <div className = {styles.informacoes_projeto}> 
                                            <p> Edição do Projeto (Form) </p>
                                        </div>
                                    )
                                }
                            </div>

                        </Container>
                    </div>
                )

            : 
                (
                    <Container>
                        <Loading/>
                    </Container>
                )
            }
        </>
    )
}

export default Projeto_detalhes