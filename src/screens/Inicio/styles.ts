import styled from "styled-components/native";
import { Roboto_500Medium } from "@expo-google-fonts/roboto";

export const Informacao = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 16px;
`;

export const TextoRodape = styled.Text`
  color: #aaa;
  text-align: right;
`;

export const Main = styled.View`
  flex: 1;
  padding: 10%;
  align-items: center;
  justify-content: center;
`;

export const Titulo = styled.Text`
  color: #03989e;
  font-size: 20px;
  font-weight: bold;
`;

export const TextoBotaoAcessar = styled.Text`
  flex: 1;
  justify-content: center;
  text-align: center;
  color: #fff;
  font-family: Roboto_500Medium;
  font-size: 16px;
`;

export const ButtonIcon = styled.View`
  height: 60px;
  width: 60px;
  border-radius: 10px;
  background-color: #00767a;
  justify-content: center;
  align-items: center;
`;
