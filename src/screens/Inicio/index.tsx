import React from 'react';
import { Image, Text } from 'react-native';
import logo from './../../assets/images/qVacinaLogo.png';
import { BotaoAcessar, Container, Informacao, Main, TextoBotaoAcessar, TextoRodape, Titulo } from './styles';

const Inicio : React.FC = () => {
  return (
    <Container>
      <Main>
        <Titulo> Bem Vindo(a) ao</Titulo>
        <Image source={logo}/>
        <BotaoAcessar>
          <TextoBotaoAcessar>Acessar</TextoBotaoAcessar>
        </BotaoAcessar>
      </Main>
        
      <Informacao>
        <TextoRodape>Feito por Eduardo Miguel</TextoRodape>
        <TextoRodape>v1.0.0</TextoRodape>
      </Informacao>
    </Container>
  );
}

export default Inicio;