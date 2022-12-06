import { useEffect, useState} from "react"

import Input from "../form/Input"
import Select from "../form/Select"
import Submit from "../form/Submit"
import styles from "./FormProjeto.module.css"

function FormProjeto({btnText}){
    const [categorias, set_categorias] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/categorias", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then((resp) => resp.json())
        .then((dados) => {
            set_categorias(dados)
        })
        .catch((erro) => console.log(erro))
    }, [])

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

            <Select text = "Selecione a categoria" name = "categoria_id" options = {categorias}/>
            <Submit text = {btnText} />
        </form>
    )
}

export default FormProjeto