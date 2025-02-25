import instagram from "../../assets/iconeInstagram.png"
import github from "../../assets/github.png"
import linkedin from "../../assets/linkedin.png"
import S from "../../components/Header.jsx/header.module.scss"

export default function Header(){
    return(
        <>
        <section className={S.boxHeader} >
            <h1 className={S.boxTitulo}>Lucas Vinicius</h1>
            <section className={S.boxMenu} >
                <a href="#about" title="Sobre mim">Sobre mim</a>
                <a href="https://github.com/Lucasvpldeveloper?tab=repositories" target="blank">Projetos</a>
                <a href="https://wa.me/message/QGDJ52S6MKG6K1" target="blank">Fale comigo</a>
            </section>
            <section className={S.boxImagem} >
                <a href="https://www.instagram.com/lucasvpl?igsh=NmQzNDI2cnZ1OG90&utm_source=qr" target="blank">
                    <img src={instagram} alt="Logo instagram" />
                </a>
                <a href="https://github.com/lucasvpldeveloper" target="blank">
                    <img src={github} alt="Logo do github" />
                </a>
                <a href="https://www.linkedin.com/in/lucas-vpl-5b65aa31a/" target="blank">
                    <img src={linkedin} alt="Logo do linkedin" />
                </a>
            </section>
        </section>
        </>
    )
}