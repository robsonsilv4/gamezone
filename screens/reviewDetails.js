import { Text, View } from 'react-native';

import React from 'react';
import { globalStyles } from '../styles/global';

export default function ReviewDetail({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text>{navigation.getParam('title')}</Text>
      <Text>{navigation.getParam('body')}</Text>
      <Text>{navigation.getParam('rating')}</Text>
    </View>
  );
}
