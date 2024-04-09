import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 5%;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 35px;
  max-width: 1260px;
  padding: 0 80px;
  margin: 5px auto;
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
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 250px;
  grid-row-gap: 25px;
  max-width: 1260px;
  padding: 0 80px;
  margin: 0 auto;
  margin-top: 30px;
  @media screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border: solid 2px black;
  border-radius: 5px;
  margin-bottom: 15px;
  padding: 3px;
  width: 350px;
  height: 45px;
  svg {
    margin: 0 5px;
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
  cursor: pointer;
  font-size: 25px;
  font-weight: 500;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: ${(props) => (props.primaryColor ? "#DF8E03" : "#EBC255")};
  width: ${(props) => (props.width ? props.width : "200px")};
  height: 60px;
`;

export const ModalWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.2);
`;
