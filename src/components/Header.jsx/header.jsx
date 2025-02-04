import instagram from "../../assets/iconeInstagram.png"
import github from "../../assets/github.png"
import linkedin from "../../assets/linkedin.png"
import twitter from "../../assets/twitter.png"
import S from "../../components/Header.jsx/header.module.scss"

export default function Header(){
    return(
        <>
        <section className={S.boxHeader} >
            <h1 className={S.boxTitulo} >Lucas Vinicius</h1>
            <section className={S.boxMenu} >
                <a href="#">Sobre mim</a>
                <a href="#">Projetos</a>
                <a href="#">Conhecimentos</a>
                <a href="#">Fale comigo</a>
            </section>
            <section className={S.boxImagem} >
                <a href="#">
                    <img src={instagram} alt="Logo instagram" />
                </a>
                <a href="#">
                    <img src={github} alt="Logo do github" />
                </a>
                <a href="#">
                    <img src={linkedin} alt="Logo do linkedin" />
                </a>
                <a href="#">
                    <img src={twitter} alt="Logo do twitter" />
                </a>
            </section>
        </section>
        </>
    )
}