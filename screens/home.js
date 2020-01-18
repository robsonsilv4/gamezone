import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';

import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
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
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <View style={styles.modalContent}>
          <MaterialIcons
            name="close"
            size={24}
            style={{ ...styles.modalToggle, ...styles.modalClose }}
            onPress={() => setModalOpen(false)}
          />
          <Text>Testando...</Text>
        </View>
      </Modal>
      <MaterialIcons
        name="add"
        size={24}
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      />

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

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
});
