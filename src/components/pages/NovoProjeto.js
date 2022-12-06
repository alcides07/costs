import FormProjeto from "../projeto/FormProjeto"
import styles from "./NovoProjeto.module.css"

function NovoProjeto(){
    return (
        <div className = {styles.novo_projeto_container}>
            <h1> Criação de Projeto </h1>
            <p> Crie seu projeto agora mesmo! </p>
            <FormProjeto btnText = "Criar Projeto"/>
        </div> 
    )
}

export default NovoProjeto