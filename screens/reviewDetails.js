import { Button, Text, View } from 'react-native';

import React from 'react';
import { globalStyles } from '../styles/global';

export default function ReviewDetail({ navigation }) {
  const pressHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={globalStyles.container}>
      <Text>Avaliações</Text>
      <Button title="Voltar para o inicio" onPress={pressHandler} />
    </View>
  );
}
