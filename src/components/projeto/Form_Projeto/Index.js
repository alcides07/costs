import { useEffect, useState} from "react"

import Input from "../../form/Input/Index"
import Select from "../../form/Select/Index"
import Submit from "../../form/Submit/Index"
import styles from "./Styles.module.css"

function Form_Projeto({handle_submit, btnText, dados_projeto}){

    const [categorias, set_categorias] = useState([])
    const [projeto, set_projeto] = useState(dados_projeto || {})

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

    const submete = (evento) => {
        evento.preventDefault()
        handle_submit(projeto)
    }

    function handleChange(evento) {
        // Pegar todos os dados do projeto atuais e setar os valores a ser preenchidos
        set_projeto({...projeto,[evento.target.name]:evento.target.value})
    }

    function handleCategoria(evento) {
        set_projeto ({ ...projeto, categoria: {
            id: evento.target.value,
            nome: evento.target.options[evento.target.selectedIndex].text
        }})
    }

    return (
        <form onSubmit = {submete} className = {styles.form}>
            <Input
                type = "text"
                text = "Nome do Projeto"
                name = "nome"
                placeholder = "Insira o nome do projeto"
                handleOnChange = {handleChange}
                value = {projeto.nome ? projeto.nome : ""}
            />

            <Input
                type = "number"
                text = "Orçamento do projeto"
                name = "orcamento"
                placeholder = "Insira o orçamento total"
                handleOnChange = {handleChange}
                value = {projeto.orcamento ? projeto.orcamento : ""}
            />

            <Select
                text = "Selecione a categoria"
                name = "categoria_id"
                options = {categorias}
                handleOnChange = {handleCategoria}
                value = {projeto.categoria ? projeto.categoria.id : ""}
            />
            <Submit text = {btnText} />
        </form>
    )
}

export default Form_Projeto