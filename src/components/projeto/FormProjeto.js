import Input from "../form/Input"
import Select from "../form/Select"
import Submit from "../form/Submit"
import styles from "./FormProjeto.module.css"

function FormProjeto({btnText}){
    return (
        <form className = {styles.form}>
            <Input
                type = "text"
                text = "Nome do Projeto"
                name = "name"
                placeholder = "Insira o nome do projeto"
            />

            <Input
                type = "number"
                text = "Orçamento do projeto"
                name = "budget"
                placeholder = "Insira o orçamento total"
            />

            <Select text = "Selecione a categoria" name = "categoria_id"/>
            <Submit text = {btnText} />
            
        </form>
    )
}

export default FormProjeto