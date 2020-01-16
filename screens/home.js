import { StyleSheet, Text, View } from 'react-native';

import React from 'react';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Página inicial</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
