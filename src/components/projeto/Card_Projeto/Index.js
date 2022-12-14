import styles from "./Styles.module.css"
import {BsPencil, BsFillTrashFill} from "react-icons/bs"
import { Link } from "react-router-dom";

function Card_Projeto({id, nome, orcamento, categoria, handleRemove}){

    const remover = (evento => {
        evento.preventDefault()
        handleRemove(id)
    })

    return (
        <div className = {styles.card_projeto}>
            <h4> {nome} </h4>
            <p> 
                <span> Orçamento: </span> R${orcamento}
            </p>

            <p className = {styles.texto_categoria}> 
                <span className = {`${styles[categoria.toLowerCase()]}`}> </span>   
                {categoria}
            </p>

            <div className = {styles.card_projeto_acoes}>
                <Link to = {`/projeto/${id}`}> 
                    <BsPencil/> Editar
                </Link>

                <button onClick = {remover}>
                    <BsFillTrashFill/> Excluir 
                </button>
            </div>
        </div>
    )
}

export default Card_Projeto;