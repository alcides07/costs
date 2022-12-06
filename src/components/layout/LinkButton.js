import { Link } from "react-router-dom"
import styles from "./LinkButton.module.css"

function LinkButton({rota, texto}){
    return(
        <Link to = {rota} className = {styles.btn}> {texto} </Link>
    )
}

export default LinkButton