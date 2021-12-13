import styled from "styled-components/native";

export const Informacao = styled.View`
  flex-direction:row;
  justify-content: space-between;
  margin:16px;
`;

export const TextoRodape = styled.Text`
  color: #aaa;
  text-align:right;
`;

export const Container = styled.View`
  flex: 1;
  background-color:#fff;
`;

export const Main = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Titulo = styled.Text`
    color: #03989E;
    font-size: 20px;
    font-weight: bold;
`;

export const BotaoAcessar = styled.TouchableOpacity`
  background-color: #03989E;
  padding: 8px 40px;
  border-radius: 5px;
`;

export const TextoBotaoAcessar = styled.Text`
    color: #fff;
    font-size: 20px;
    font-weight: bold;
`;
