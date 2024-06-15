import logo from './../logo.svg';
import './../App.css';
import name from './../img/name.png';
import km from './../img/km.png';
import map from './../img/map.png';
import sign from './../img/sign.png';



function VehicleRegister() {
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
          <img src={name} alt="nome" />
          <input type="text" id="nome" name="nome"/>
        </div>
        <div className="km">
          <img src={km} alt="km" />
          <input type="text" id="km" name="km"/>
        </div>
        <div className="fabricacao">
          <input type="date" id="fabricacao" name="fabricacao"/>
        </div>
      </div>
      <div className="subtitulo">
        <div className="subtitulo1">
          <a>Motorista Responsável</a>
        </div>
        <div className="subtitulo2">
          <a>Quilometros Rodados</a>
        </div>
        <div className="subtitulo3">
          <a>Ano De Fabricação</a>
        </div>
      </div>
      <br/><br/><br/><br/>
      <div className="caixas">
        <div className="placa">
          <img src={sign} alt="placa" />
          <input type="text" id="placa" name="placa"/>
        </div>
        <div className="origem">
          <img src={map} alt="km" />
          <input type="text" id="origem" name="origem"/>
        </div>
        <div className="aquisicao">
          <input type="date" id="aquisicao" name="aquisicao"/>
        </div>
      </div>
      <div className="subtitulo">
        <div className="subtitulo4">
          <a>Placa</a>
        </div>
        <div className="subtitulo5">
          <a>Origem</a>
        </div>
        <div className="subtitulo6">
          <a>Ano De Aquisição</a>
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

export default VehicleRegister;