import styles from './Styles/Footer.module.css'
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () =>{
    return(
        <div className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerText}>
                    <p>Endereço: .................</p>
                    <p><span>@Petmania</span> Todos os direitos reservados @2024</p>
                </div>
                <div className={styles.footerIcons}>
                    <a href='#'><FaWhatsapp /></a>
                    <a href='#'><FaInstagram /></a>
                    <a href='#'><FaFacebook /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;