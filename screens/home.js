import { StyleSheet, Text, View } from 'react-native';

import React from 'react';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Página inicial</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  titleText: {
    fontFamily: 'nunito-bold',
    fontSize: 18,
  },
});
