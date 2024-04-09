import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 2%;
  flex-direction: column;
`;

export const Imagem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-bottom: 2%;
  margin-left: 25%;
`;

export const Title = styled.h1`
  font-size: 35px;
  margin: 2% 15% 0 15%;
`;
export const Subtitle = styled.span`
  margin-bottom: 20px;
  font-size: 20px;
  margin-left: 15%;
  margin-right: 15%;
  font-weight: 500;
  color: #555;
`;

export const Form = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 25px;
  margin-left: 15%;
  margin-right: 15%;
  margin-top: 15px;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border: solid 2px black;
  border-radius: 5px;
  margin-bottom: 15px;
  padding: 3px;
  width: 350px;
  height: 35px;
  svg {
    padding: 5px;
  }
`;

export const InputField = styled.input`
  height: 100%;
  margin-left: 2px;
  width: 340px;
  display: flex;
  justify-content: center;
  font-size: 18px;
  border: none;
  outline: none;
`;

export const DefaultButton = styled.div`
  display: flex;
  color: #fff;
  font-size: 25px;
  font-weight: 500;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background: ${props => props.primaryColor ? "#DF8E03" : "#EBC255"};
  width: 200px;
  height: 60px;
  margin-left: 15%;
`;
