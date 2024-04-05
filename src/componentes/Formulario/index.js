
import CampoTexto from '../CampoTexto';
import './Formulario.css';

const Formulario = () => {
    return (
        <section className="formulario">
            <form >
                <CampoTexto placeholder="Ex: email@gmail.com" className="email"/>
                <CampoTexto placeholder="Senha" className="senha"/>
                <CampoTexto placeholder="Confirmação de Senha" className="senha"/>
                <CampoTexto placeholder="CNPJ" className="cnpj"/>
                <button className='button'>Cadastrar</button>
            </form>
        </section>
    )
}

export default Formulario