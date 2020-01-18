import { Button, Text, View } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import React, { useState } from 'react';

import Card from '../shared/card';
import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      title: 'GTA V',
      rating: 5,
      body:
        'Grand Theft Auto V é um jogo eletrônico de ação-aventura desenvolvido pela Rockstar North e publicado pela Rockstar Games.',
    },
    {
      id: 2,
      title: 'FIFA 20',
      rating: 4,
      body:
        'FIFA 20 é um jogo eletrônico de futebol desenvolvido e publicado pela EA Sports.',
    },
    {
      id: 3,
      title: 'Minecraft',
      rating: 2,
      body:
        'Minecraft é um jogo eletrônico tipo sandbox e independente de mundo aberto que permite a construção usando blocos dos quais o mundo é feito.',
    },
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        // A key precisa ser uma string
        keyExtractor={(_item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ReviewDetails', item);
            }}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
