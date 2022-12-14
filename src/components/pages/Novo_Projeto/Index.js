import FormProjeto from "../../projeto/Form_Projeto/Index"
import styles from "./Styles.module.css"
import { useNavigate  } from "react-router-dom"

function NovoProjeto(){

    const navigate = useNavigate();

    function handle_submit(projeto){

        projeto.custo = 0
        projeto.servicos = []

        fetch("http://localhost:5000/projetos", {
            method : "POST",
            headers: {
                "Content-type" : "application/json",
            },
            body: JSON.stringify(projeto)
        })  
        .then(resposta => resposta.json())
        .then((dados) => {
            navigate("/projetos", {state: {mensagem: "Projeto criado com sucesso!"}})
        })
        .catch(erro => console.log(erro))
    }
    
    return (
        <div className = {styles.novo_projeto_container}>
            <h1> Criação de Projeto </h1>
            <p> Crie seu projeto agora mesmo! </p>
            <FormProjeto handle_submit = {handle_submit} btnText = "Criar Projeto"/>
        </div>
    )
}

export default NovoProjeto