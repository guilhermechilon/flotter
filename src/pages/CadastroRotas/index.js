import React, { useState } from "react";
import {
  InputField,
  InputWrapper,
  Subtitle,
  Title,
  Wrapper,
  Form,
  DefaultButton,
  ModalPopUp,
  ModalMargin,
} from "./styles";
import { FaUserCircle } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineSpeed } from "react-icons/md";
import { FaIdCard } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function RegistroMaquina() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleBack = () => {
    // Adicione a lógica para o botão OK aqui
    console.log("OK clicked");
    closeModal();
  };

  const handleDetail = () => {
    // Adicione a lógica para o botão Detalhar Rota aqui
    closeModal();
    navigate("/tabelateste");
  };
  return (
    <>
      {isModalOpen && (
        <ModalPopUp>
          <div>
            <ModalMargin>
              <div className="modal-content">
                <h2>ROTA CADASTRADA COM SUCESSO</h2>
              </div>
            </ModalMargin>
            <div className="buttons">
              <button className="back-button" onClick={handleBack}>
                Voltar
              </button>
              <button className="detail-button" onClick={handleDetail}>
                Detalhar Rota
              </button>
            </div>
          </div>
        </ModalPopUp>
      )}
      <Wrapper>
        <Title>CADASTRO DE ROTA</Title>
        <Subtitle>
          <hr style={{ width: "100%", borderTop: "solid 1px black" }} />
        </Subtitle>
        <Form>
          <InputWrapper>
            <FaUserCircle size={20} />
            <InputField placeholder="Destino" />
          </InputWrapper>
          <InputWrapper>
            <FaCalendarAlt size={20} />
            <InputField placeholder="Horário de Saída" />
          </InputWrapper>
          <InputWrapper>
            <IoLocationSharp size={20} />
            <InputField placeholder="Origem" />
          </InputWrapper>
          <InputWrapper>
            <FaIdCard size={20} />
            <InputField placeholder="Placa do veículo" />
          </InputWrapper>
          <InputWrapper>
            <MdOutlineSpeed size={20} />
            <InputField placeholder="Quilometragem" />
          </InputWrapper>
          <DefaultButton
            primaryColor
            width={"350px"}
            onClick={() => setIsModalOpen(true)}
          >
            Cadastrar Rota
          </DefaultButton>
        </Form>
      </Wrapper>
    </>
  );
}

export default RegistroMaquina;
