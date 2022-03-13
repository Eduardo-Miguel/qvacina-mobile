import React from 'react';
import { Header, Titulo } from './styles';
import Constants from 'expo-constants';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Vacinas: React.FC = () => {

  const navigation = useNavigation();
  const handleNavigateBack = () => {
    navigation.goBack()
  }
  return (
    <View style={styles.container}>
      <Header>
        <TouchableOpacity onPress={handleNavigateBack}>
          <Feather name='arrow-left' size={20} color={'#03989e'} />
        </TouchableOpacity>
        <Titulo> Encontrar Vacina</Titulo>
      </Header>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 20 + Constants.statusBarHeight,
  }
});

export default Vacinas;