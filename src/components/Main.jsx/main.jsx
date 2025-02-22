import S from "../Main.jsx/main.module.scss"
import notebook from "../../assets/notebook.png"
import vidro from "../../assets/vidro.png"
import lucas from "../../assets/lucas.jpg"

export default function Main(){
    return(
        <>
        <main className={S.boxMain} >
            <section className={S.boxPrincipal} >
                <section className={S.boxIntroducao} >
                    <p>HELLO WORLD</p>
                    <h1>Eu sou Lucas,</h1>
                    <h2>Desenvolvedor Front-end.</h2>
                    <a href="https://wa.me/message/QGDJ52S6MKG6K1" target="blank"><button>FALE COMIGO</button></a>
                </section>
                <section className={S.boxBola}>
                    <div className={S.boxIMG} >
                        <img className={S.boxVidro} src={vidro} alt="" />
                        <img src={notebook} alt="Imagem de um macbook" />
                    </div>
                </section>
            </section>
            <section className={S.boxSecundaria}>
                <section className={S.boxInterna} >
                    <section className={S.boxLucas} >
                    <img src={lucas} alt="imagem lucas" />
                    </section>
                    <section className={S.boxDescricao} >
                        <div id="about" className={S.container} >
                            <h3>Sobre mim</h3>
                        </div>
                        <p>Me chamo Lucas Vinicius, graduando o curso de Analises e Desenvolvimento de Sistemas pela UNINASSAU e desenvolvedor Front-end. Desenvolvo páginas e sistemas web responsívos. Tenho uma trajetória de 4 anos como gerente de posto de gasolina, 1 ano no controle de estoque em uma cafeteria em Portugal e 2 anos como coordenador geral em um Colégio. O que me tornou um profissional dedicado e organizado. Hoje na área de desenvolvimento vivo o aprendizado continuo, Busco oportunidades no mercado como dev e, em um futuro próximo, viso me tornar um desenvolvedor Full Stack.  </p>
                    </section>
                </section>
            </section>
        </main>
        </>
    )
}