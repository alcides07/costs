import { Link } from "react-router-dom"
import styles from "./Styles.module.css"

function Link_Button({rota, texto}){
    return(
        <Link to = {rota} className = {styles.botao}> {texto} </Link>
    )
}

export default Link_Button