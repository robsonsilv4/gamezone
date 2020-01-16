import { Button, Text, View } from 'react-native';

import React from 'react';
import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {
  const pressHandler = () => {
    navigation.navigate('ReviewDetails');
    // navigation.push('ReviewDetails'); // Adiciona novamente?
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Página inicial</Text>
      <Button title="Ir para avaliações" onPress={pressHandler} />
    </View>
  );
}
