import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { BtnVoltar, Header, Main, Titulo } from './styles';

interface Props {
  route: Route;
}

interface Route {
  params: Params;
}
interface Params {
  id: number;
}

const Detalhe: React.FC<Props> = ({ route }) => {
  const { id } = route.params;
  console.log(id);

  const navigation = useNavigation();

  const handleNavigateBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Header>
        <BtnVoltar onPress={handleNavigateBack}>
          <Feather name='arrow-left' size={20} color={'#03989e'} />
        </BtnVoltar>
        <Titulo> Detalhes da Vacina</Titulo>
      </Header>
      <Main>
        <Text>Sobre a Vacina</Text>
        <Text>Protege contra formas graves da tuberculose. É aplicada no primeiro mês de vida do bebê, no braço direito. As reações, normais, ocorrem semanas depois. Limpeza local com água e sabão é suficiente para cuidar.</Text>
        <Text>Local de Vacinação</Text>
        <Text>Posto nova bahia</Text>
        <Text>Rua Larari, 1435, Nova Bahia, Campo Grande - MS </Text>
        <Text>Informações</Text>
        <Text>Aberto - Fecha às 17hrs</Text>
        <Text>Telefone: (67) 4002-8922 - (67) 0800 777 7000</Text>
      </Main>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20 + Constants.statusBarHeight,
  },
});
export default Detalhe;