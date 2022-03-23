import styled from "styled-components/native";
import { Roboto_500Medium } from "@expo-google-fonts/roboto";

export const BtnVoltar = styled.TouchableOpacity`
  padding: 0px 16px;
`;

export const Titulo = styled.Text`
  font-size: 20px;
  font-weight: bold;
  font-family: Roboto_500Medium;
  text-align: center;
  color: #03989e;
`;

export const Header = styled.View``;
export const Main = styled.View``;

export const ItemVacinaLista = styled.TouchableOpacity`
  border: 1px #59ef24 solid;
  border-radius: 4px;
  flex-direction: row;
  padding: 8px;
  margin: 2px 0px;
  justify-content: space-between;
`;

export const DescricaoIconeVacina = styled.View`
  justify-content: center;
  flex-direction: row;
  width: 50%;
`;

export const ViewNomeVacina = styled.View`
  justify-content: center;
  padding: 0 10px;
`;

export const DescricaoItemVacina = styled.View`
  justify-content: center;
  width: 50%;
`;

export const TextoDisponibilidade = styled.Text`
  font-size: 10px;
  text-align: right;
`;

export const TextoNome = styled.Text`
  font-size: 20px;
  text-align: right;
`;

export const TextoEndereco = styled.Text`
  font-size: 10px;
  text-align: right;
`;
