import { StyleSheet, Text, View } from 'react-native';

import React from 'react';

export default function About() {
  return (
    <View style={styles.container}>
      <Text>Sobre</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
