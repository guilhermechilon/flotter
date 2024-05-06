import React from "react";
import {
  InputField,
  InputWrapper,
  Subtitle,
  Title,
  Wrapper,
  Form,
  DefaultButton,
} from "./styles";
import { FaUserCircle } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineSpeed } from "react-icons/md";
import { FaIdCard } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

function RegistroMaquina() {
  return (
    <>
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
            onClick={() => alert("Vai ter um pop-up aqui um dia")}
          >
            Cadastrar Rota
          </DefaultButton>
        </Form>
      </Wrapper>
    </>
  );
}

export default RegistroMaquina;
