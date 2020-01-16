import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import { globalStyles } from '../styles/global';

export default function Home() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Página inicial</Text>
    </View>
  );
}
