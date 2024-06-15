import logo from './../logo.svg';
import './../App.css';
import name from './../img/name.png';
import km from './../img/km.png';
import map from './../img/map.png';
import sign from './../img/sign.png';
import marca from './../img/marca.png';
import tipo from './../img/tipo.png';
import modelo from './../img/modelo.png';


function VehicleRegister2() {
  return (
    <div className="App">
      <br/><br/><br/><br/><br/>
      <h1>REGISTRO DE MÁQUINA</h1>
      <div className="titulo">
        <a>Preencha Os Campos</a>
        <br/><br/><br/><br/>
      
        <a>Dados Do Maquinário</a>
      </div>
      <hr></hr>
      <br/>
      <div className="caixas">
        <div className="nome">
          <img src={tipo} alt="tipo" />
          <input type="text" id="nome" name="nome"/>
        </div>
        <div className="km">
          <img src={marca} alt="marca" />
          <input type="text" id="km" name="km"/>
        </div>
        <div className="fabricacao">
        <img src={modelo} alt="modelo" />
          <input type="text" id="fabricacao" name="fabricacao"/>
        </div>
      </div>
      <div className="subtitulo">
        <div className="subtitulo7">
          <a>Tipo</a>
        </div>
        <div className="subtitulo8">
          <a>Marca</a>
        </div>
        <div className="subtitulo9">
          <a>Modelo</a>
        </div>
      </div>
      <br/><br/><br/><br/>
      <div className="caixas2">
        <div className="placa">
          <input type="text" id="placa" name="placa"/>
        </div>
      </div>
      <div className="subtitulo">
        <div className="subtitulo1">
          <a>Observação</a>
        </div>
      </div>
      <br/><br/><br/>
      <div className="botao">
          <button className="botao1">Voltar</button>
          <button className="botao2">Próximo</button>
      </div>
    </div>
  );
}

export default VehicleRegister2;