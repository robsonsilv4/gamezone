import { Image, StyleSheet, Text, View } from 'react-native';
import { globalStyles, images } from '../styles/global';

import Card from '../shared/card';
import React from 'react';

export default function ReviewDetail({ navigation }) {
  const rating = navigation.getParam('rating');

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{navigation.getParam('title')}</Text>
        <Text>{navigation.getParam('body')}</Text>
        <View style={styles.rating}>
          <Text>Avaliação GameZone: </Text>
          <Image source={images.rating[rating]} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
});
