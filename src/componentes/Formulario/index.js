import CampoTexto from '../CampoTexto';
import { BotaoLogin, BotaoCadastro } from '../CampoTexto/style';
import './Formulario.css';

/*const Lista=[Email, Senha, cnh]
*/
const Formulario = () => {
    return (
        <section className="formulario">
            <form >
                <CampoTexto placeholder="Emailbom@gmail.com" className="email"/>
                <CampoTexto placeholder="******************" className="senha"/>
                <CampoTexto placeholder="******************" className="senha"/>
                <CampoTexto placeholder="CNH" className="CNH"/>
                <BotaoCadastro>Cadastrar</BotaoCadastro>
                <BotaoLogin>Tela de Login</BotaoLogin>
            </form>
        </section>
    )
}

export default Formulario
