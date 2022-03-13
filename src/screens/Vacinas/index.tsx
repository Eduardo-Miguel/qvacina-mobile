import React from 'react';
import { Container, Titulo } from './styles';
import Constants from 'expo-constants';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Vacinas: React.FC = () => {

  const navigation = useNavigation();
  const handleNavigateBack = () => {
    navigation.goBack()
  }
  return (
    <Container>
      <TouchableOpacity onPress={handleNavigateBack}>
        <Feather name='arrow-left' size={20} color={'#03989e'} />
      </TouchableOpacity>
      <Titulo> Encontrar Vacina</Titulo>
    </Container>
  );
}

export default Vacinas;