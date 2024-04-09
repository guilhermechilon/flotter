import React from "react";
import {
  Imagem,
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

import Imagem_1 from "../../assets/Image-1.PNG";

function RegistroMaquina() {
  return (
    <Wrapper>
      <Imagem>
        <img alt="asd" src={Imagem_1} />
      </Imagem>
      <Title>REGISTRO DE MÁQUINA</Title>
      <Subtitle>Preencha os campos</Subtitle>
      <Subtitle>
        Dados do Maquinário
        <hr style={{ width: "100%", borderTop: "solid 1px black" }} />
      </Subtitle>
      <Form>
        <InputWrapper>
          <FaUserCircle size={25} />
          <InputField placeholder="Motorista responsável" />
        </InputWrapper>
        <InputWrapper>
          <FaCalendarAlt size={25} />
          <InputField placeholder="Ano de Fabricação" />
        </InputWrapper>
        <InputWrapper>
          <MdOutlineSpeed size={25} />
          <InputField placeholder="Quilômetros rodados" />
        </InputWrapper>
        <InputWrapper>
          <FaIdCard size={25} />
          <InputField placeholder="Placa do veículo" />
        </InputWrapper>
        <InputWrapper>
          <FaCalendarAlt size={25} />
          <InputField placeholder="Ano de aquisição" />
        </InputWrapper>
        <InputWrapper>
          <IoLocationSharp size={25} />
          <InputField placeholder="Origem" />
        </InputWrapper>
      </Form>
      <div style={{ display: "flex", marginTop: "55px", marginLeft: "15%" }}>
        <DefaultButton>Voltar</DefaultButton>
        <DefaultButton primaryColor>Proximo</DefaultButton>
      </div>
    </Wrapper>
  );
}

export default RegistroMaquina;
