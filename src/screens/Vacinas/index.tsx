import React from 'react';
import {
  BtnVoltar,
  DescricaoIconeVacina,
  DescricaoItemVacina,
  Header,
  ItemVacinaLista,
  Main,
  TextoDisponibilidade,
  TextoEndereco,
  TextoNome,
  Titulo,
  ViewNomeVacina
} from './styles';
import Constants from 'expo-constants';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Vacinas: React.FC = () => {

  const navigation = useNavigation();
  const handleNavigateBack = () => {
    navigation.goBack()
  };

  const handleVacina = (id: number) => {
    navigation.navigate("Detalhe", { id: 34 });
  };

  interface itemVacina {
    id: number;
    nomeVacina: string,
    endereco: string,
    disponibilidade: boolean,
    nomePosto: string,
    aberto: boolean,
    horarioFuncionamento: string,
  }

  const DATA: itemVacina[] = [
    {
      id: 1,
      nomeVacina: 'Hepatite B',
      endereco: 'Rua Homero Lima, 1073, Campo Grande - MS',
      disponibilidade: true,
      nomePosto: 'Nova Bahia',
      aberto: true,
      horarioFuncionamento: 'Das 7h até 19h',
    },
    {
      id: 2,
      nomeVacina: 'Hepatite B',
      endereco: 'Rua Homero Lima, 1073, Campo Grande - MS',
      disponibilidade: true,
      nomePosto: 'Nova Bahia',
      aberto: false,
      horarioFuncionamento: 'Das 7h até 19h',
    },
    {
      id: 3,
      nomeVacina: 'Hepatite B',
      endereco: 'Rua Homero Lima, 1073, Campo Grande - MS',
      disponibilidade: true,
      nomePosto: 'Nova Bahia',
      aberto: false,
      horarioFuncionamento: 'Das 7h até 19h',
    },
    {
      id: 4,
      nomeVacina: 'Hepatite B',
      endereco: 'Rua Homero Lima, 1073, Campo Grande - MS',
      disponibilidade: false,
      nomePosto: 'Nova Bahia',
      aberto: true,
      horarioFuncionamento: 'Das 7h até 19h',
    },
    {
      id: 5,
      nomeVacina: 'Hepatite B',
      endereco: 'Rua Homero Lima, 1073, Campo Grande - MS',
      disponibilidade: false,
      nomePosto: 'Nova Bahia',
      aberto: true,
      horarioFuncionamento: 'Das 7h até 19h',
    },
    {
      id: 6,
      nomeVacina: 'Hepatite B',
      endereco: 'Rua Homero Lima, 1073, Campo Grande - MS',
      disponibilidade: false,
      nomePosto: 'Nova Bahia',
      aberto: true,
      horarioFuncionamento: 'Das 7h até 19h',
    },
    {
      id: 7,
      nomeVacina: 'Hepatite B',
      endereco: 'Rua Homero Lima, 1073, Campo Grande - MS',
      disponibilidade: true,
      nomePosto: 'Nova Bahia',
      aberto: false,
      horarioFuncionamento: 'Das 7h até 19h',
    },
    {
      id: 8,
      nomeVacina: 'Hepatite B',
      endereco: 'Rua Homero Lima, 1073, Campo Grande - MS',
      disponibilidade: false,
      nomePosto: 'Nova Bahia',
      aberto: false,
      horarioFuncionamento: 'Das 7h até 19h',
    },
    {
      id: 9,
      nomeVacina: 'Hepatite B',
      endereco: 'Rua Homero Lima, 1073, Campo Grande - MS',
      disponibilidade: false,
      nomePosto: 'Nova Bahia',
      aberto: false,
      horarioFuncionamento: 'Das 7h até 19h',
    },

  ];

  return (
    <View style={styles.container}>
      <Header>
        <BtnVoltar onPress={handleNavigateBack}>
          <Feather name='arrow-left' size={20} color={'#03989e'} />
        </BtnVoltar>
        <Titulo> Encontrar Vacina</Titulo>
      </Header>
      <Main>
        <FlatList
          style={styles.list}
          data={DATA}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item, index, separators }) => (
            <ItemVacinaLista
              onPress={() => handleVacina(item.id)}
            >
              <DescricaoIconeVacina style={{ justifyContent: 'flex-start' }}>
                <View style={{ justifyContent: 'center', paddingHorizontal: 10 }}>
                  <FontAwesome5 name="syringe" size={24} color="black" />
                </View>
                <ViewNomeVacina>
                  <Text>{item.nomeVacina}</Text>

                  {item.aberto ?
                    <Text style={{ fontSize: 10, color: '#0a0' }}>Disponível</Text>
                    :
                    <Text style={{ fontSize: 10, color: '#f00' }}>Indisponível</Text>
                  }

                </ViewNomeVacina>
              </DescricaoIconeVacina>

              <DescricaoItemVacina>
                <TextoDisponibilidade>
                  {item.horarioFuncionamento}{' - '}
                  {item.aberto ?
                    <Text style={{ color: '#0a0' }}>Aberto</Text>
                    :
                    <Text style={{ color: '#f00' }}>Fechado</Text>
                  }
                </TextoDisponibilidade>
                <TextoNome>{item.nomePosto}</TextoNome>
                <TextoEndereco>{item.endereco}</TextoEndereco>
              </DescricaoItemVacina>
            </ItemVacinaLista>
          )}
        />
      </Main>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20 + Constants.statusBarHeight,
  },
  list: {
    padding: 16,
  },
});

export default Vacinas;