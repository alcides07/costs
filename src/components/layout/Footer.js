import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from "./Footer.module.css"

function Footer (){
    return (
        <footer className = {styles.footer}> 
            <ul className = {styles.redes_sociais}>
               <li> <a href = "https://www.facebook.com"> <FaFacebook/> </a> </li> 
               <li> <a href = "https://www.instagram.com"> <FaInstagram/> </a> </li> 
               <li> <a href = "https://www.linkedin.com"> <FaLinkedin/> </a> </li> 
            </ul>
            <p className = {styles.copy_right}> 
                <span> Costs </span> &copy; 2022 
            </p>
        </footer>
    )
}

export default Footer