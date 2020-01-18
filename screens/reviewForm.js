import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import { Formik } from 'formik';
import React from 'react';
import { globalStyles } from '../styles/global';

export default function ReviewForm({ addReview }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: '', body: '', rating: '' }}
        onSubmit={(values, actions) => {
          console.log(values);
          addReview(values);
          actions.resetForm();
        }}
      >
        {props => (
          <View>
            <TextInput
              placeholder="Título da avaliação"
              onChangeText={props.handleChange('title')}
              value={props.values.title}
              style={globalStyles.input}
            />
            <TextInput
              multiline
              placeholder="Texto da avaliação"
              onChangeText={props.handleChange('body')}
              value={props.values.body}
              style={globalStyles.input}
            />
            <TextInput
              keyboardType="numeric"
              placeholder="Avaliação (1-5)"
              onChangeText={props.handleChange('rating')}
              value={props.values.rating}
              style={globalStyles.input}
            />
            <Button
              title="Enviar"
              color="maroon"
              onPress={props.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}
