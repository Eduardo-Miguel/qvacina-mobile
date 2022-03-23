import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { ButtonIcon, Informacao, Main, TextoBotaoAcessar, TextoRodape, Titulo, } from "./styles";
import { Feather } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native";

const Inicio: React.FC = () => {

  const navigation = useNavigation();

  const handleNavigateToList = () => {
    navigation.navigate("Vacinas");
  }

  return (
    <ImageBackground
      source={require('../../assets/images/qVacinaLogoPBTransp.png')}
      style={{ flex: 1, justifyContent: 'flex-end' }}
    >
      <Main>
        <Titulo> Bem Vindo(a) ao</Titulo>
        <Image source={require('../../assets/images/qVacinaLogo.png')} />
        <RectButton
          onPress={handleNavigateToList}
          style={styles.button}>
          <ButtonIcon>
            <Text>
              <Feather name="arrow-right" color={'#fff'} size={24} />
            </Text>
          </ButtonIcon>
          <TextoBotaoAcessar>Acessar</TextoBotaoAcessar>
        </RectButton>
      </Main>

      <Informacao>
        <TextoRodape>Feito por Eduardo Miguel</TextoRodape>
        <TextoRodape>v1.0.0</TextoRodape>
      </Informacao>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#03989e',
    height: 60,
    flexDirection: "row",
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
  },
});

export default Inicio;
