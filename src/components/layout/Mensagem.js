import styles from "./Mensagem.module.css"
import {useState, useEffect} from "react"

function Mensagem({tipo, msg}){

    const [visibilidade, setVisibilidade] = useState(false)

    useEffect(() => {
        if (!msg){
            setVisibilidade(false)
            return 
        }

        setVisibilidade(true)
        const tempo = setTimeout(() => {
            setVisibilidade(false)
        }, 3000)
        
        return () => clearTimeout(tempo)

    }, [msg])

    return (
        <>
            {visibilidade && (
                <div className = {`${styles.mensagem} ${styles[tipo]}`}>
                    {msg}
                </div>
            )}
        </>
    )
}

export default Mensagem