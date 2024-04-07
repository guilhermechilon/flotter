
import CampoTexto from '../CampoTexto';
import './Formulario.css';

const Formulario = () => {
    return (
        <section className="formulario">
            <form >
                <CampoTexto placeholder="Emailbom@gmail.com" className="email"/>
                <CampoTexto placeholder="******************" className="senha"/>
                <CampoTexto placeholder="******************" className="senha"/>
                <CampoTexto placeholder="CNH" className="CNH"/>
                <button className='button'>Cadastrar</button>
            </form>
        </section>
    )
}

export default Formulario
