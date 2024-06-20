import styled from "styled-components";

export const Wrapper = styled.div`
  border: solid 2px #b27202;
  display: flex;
  border-radius: 2px;
  margin: 20px 15px;
  iframe {
    &:focus {
      outline: none !important;
      border: none !important;
    }
  }
`;

export const CardInfos = styled.div`
  width: 100%;
  padding: 12px;
`;
export const FieldWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 45px;
  svg {
    margin-right: 10px;
  }
  p:first-of-type {
  }
  p:last-of-type {
  }
`;

export const DetailTitle = styled.h2`
  font-size: 18px;
  margin-right: 5px;
`;

export const EditButton = styled.div`
  background-color: #1976d2;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 17px;
  padding: 8px 16px;
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
