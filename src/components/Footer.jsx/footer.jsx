import instagram from "../../assets/iconeInstagram.png"
import github from "../../assets/github.png"
import link from "../../assets/linkedin.png"
import S from "../Footer.jsx/footer.module.scss"


export default function Footer(){
    return(
        <>
        <footer className={S.boxFooter}>
            <section className={S.boxCelular}>
                <section className={S.boxDocumentos}>
                    <h4>Lucas Vinicius</h4>
                    <p>@2024 por Lucas Vinicius</p>
                    <p>Todos os direitos reservados.</p>
                </section>
                <section className={S.boxIcones}>
                    <ul>
                        <li> <a href="#"> <img src={instagram} alt="Imagem logo instagram" /> </a> </li>
                        <li> <a href="#"> <img src={github}alt="Imagem logo github" /> </a> </li>
                        <li> <a href="#"> <img src={link} alt="Imagem logo linkedin" /> </a> </li>
                    </ul>
                </section>
            </section>
        </footer>
        </>
    )
}