import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

import styles from "./Styles.module.css"

import Loading from "../../layout/Loading/Index"
import Container from "../../layout/Container/Index"
import Form_Projeto from "../../projeto/Form_Projeto/Index"
import Mensagem from "../../layout/Mensagem/Index"

function Projeto_detalhes(){
    const { id } = useParams()
    const [projeto, set_projeto] = useState([])
    const [form_projeto, set_form_projeto] = useState(false)
    const [mensagem, set_mensagem] = useState("")
    const [tipo, set_tipo] = useState("")

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

    function edicao_form(projeto){
        // Validação do orçamento 
        if (projeto.custo > projeto.orcamento){
            set_mensagem("O custo do projeto não pode exceder o orçamento disponível!")
            set_tipo("erro")
            return (false)
        }

        fetch(`http://localhost:5000/projetos/${projeto.id}`, {
            method : "PATCH",
            headers : {
                "Content-Type" : "application/json",
            },
            body : JSON.stringify(projeto),
        })
        .then((resposta) => resposta.json())
        .then((dados) => {
            set_projeto(dados)
            set_form_projeto(false)
            set_mensagem("Projeto atualizado com sucesso!")
            set_tipo("sucesso")
        })
        .catch((erro) => console.log(erro))
    }

    function visualizacao_form_projeto(){
        set_form_projeto(!form_projeto)
    }

    return (
        <>
            { projeto.nome ? 
                (
                    <div className = {styles.projeto_detalhe}>
                        <Container customClass = "column"> 

                            {mensagem && (
                                    <Mensagem tipo = {tipo} msg = {mensagem} />
                                )
                                
                            }

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
                                            <Form_Projeto
                                            handle_submit = {edicao_form}
                                            btnText = "Salvar Edição"
                                            dados_projeto = {projeto}
                                            />
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