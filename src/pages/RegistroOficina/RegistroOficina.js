import React, { useState } from 'react';
import './RegistroOficina.css';
import { BotaoAceitar, BotaoProximo, BotaoVoltar } from '../../componentes/CampoTexto/style';

const RegistroOficina = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 4; // Defina o número total de passos aqui

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  return (
    <div>
      {/* Linha do tempo */}
      <div className="timeline">
        <div className={`timeline-item ${step >= 1 ? 'active' : ''}`}>
          <span className="timeline-icon">1</span>
        </div>
        <div className={`timeline-item ${step >= 2 ? 'active' : ''}`}>
          <span className="timeline-icon">2</span>
        </div>
        <div className={`timeline-item ${step >= 3 ? 'active' : ''}`}>
          <span className="timeline-icon">3</span>
        </div>
        <div className={`timeline-item ${step >= 4 ? 'active' : ''}`}>
          <span className="timeline-icon">4</span>
        </div>
        {/* Adicione mais ícones conforme necessário */}
      </div>

      {/* Título */}
      <h1>REGISTRO DE OFICINA</h1>
      <h2>Preencha os campos.</h2>

      {/* Formulários */}
      {step === 1 && (
        <div>
          <h2>Dados do cadastrante</h2>
          <label>Nome:</label>
          <input type="text" />
          <label>CPF</label>
          <input type="text" />

        </div>
      )}

      {step === 2 && (
        <div>
          <h2>Dados da oficina</h2>
          <label>Suporte Responsável:</label>
          <input type="text" />
          <label>Data de Cadastro</label>
          <input type="date" />
          <label>CNPJ</label>
          <input type="text" />
          <label>Horário de Funcionamento</label>
          <input type="time" />
          <label>Endereço</label>
          <input type="text" />
        </div>
      )}

      {step === 3 && (
        <div>
          <h2>Informações adicionais</h2>
          <label></label>
          <input type="text" />
        </div>
      )}
      {step === 4 && (
        <div>
          <h2>Finalização</h2>
          <label></label>
          <input type="text" />
        </div>
      )}
      <div>
        {step > 1 && <BotaoVoltar onClick={handlePrev}>Voltar</BotaoVoltar>}
        {step < totalSteps && <BotaoProximo onClick={handleNext}>Próximo</BotaoProximo>}
        {step >= 4 && <BotaoAceitar>Aceitar</BotaoAceitar>}
      </div>
    </div>
  );
};

export default RegistroOficina;





/*import React from 'react';

// import { Container } from './styles';

function CadOficina() {
  return <div />;
}

export default cadastro-oficina;*/