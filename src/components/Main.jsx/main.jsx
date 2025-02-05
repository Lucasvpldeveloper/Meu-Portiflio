import M from "../Main.jsx/main.module.scss"
import notebook from "../../assets/notebook.png"

export default function Main(){
    return(
        <>
        <main className={M.boxMain} >
            <section className={M.boxPrincipal} >
                <section className={M.boxSecundaria} >
                    <p>HELLO WORLD</p>
                    <h1>Eu sou Lucas,</h1>
                    <h3>Desenvolvedor Front-end.</h3>
                    <button>FALE COMIGO</button>
                </section>
                <section className={M.boxBola}>
                    <div>
                        <img src={notebook} alt="" />
                    </div>
                </section>
            </section>
        </main>
        </>
    )
}