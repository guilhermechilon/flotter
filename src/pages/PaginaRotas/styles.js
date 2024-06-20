import styled from "styled-components";
import { Form, InputWrapper } from "../CadastroRotas/styles";
import { DetailTitle } from "../../componentes/RouteCard/styles";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  margin: 0 25px;
`;

export const Modal = styled.div`
  position: fixed;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 1000;
  .buttons {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;

export const ModalContent = styled.div`
  background-color: #fffafa;
  border: solid 1px #b27202;
  border-radius: 10px;
  padding: 15px;
`;

export const SaveButton = styled.div`
  background-color: #1976d2;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 17px;
  padding: 10px 25px;
  margin: 5px 0;
  border-radius: 5px;
  box-shadow: 1px 2px 2px 1px rgba(0, 0, 0, 0.2);
  color: #fff;
  transition: background-color 0.3s ease;
  cursor: pointer;
  svg {
    margin-right: 5px;
  }
  &:hover {
    background-color: #145fb5;
  }
`;

export const BackButton = styled(SaveButton)`
  background-color: #a9a9a9;
  &:hover {
    background-color: #949494;
  }
`;

export const RouteForm = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 0 50px;
`;

export const RouteTitle = styled(DetailTitle)`
  margin-right: 10px;
`;

export const InputRoutes = styled(InputWrapper)`
  margin-bottom: 5px;
  width: fit-content;
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
`;
