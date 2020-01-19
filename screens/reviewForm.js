import * as yup from 'yup';

import { Button, TextInput, View } from 'react-native';

import { Formik } from 'formik';
import React from 'react';
import { globalStyles } from '../styles/global';

const reviewSchema = yup.object({
  title: yup
    .string()
    .required('O título é obrigatório.')
    .min(4, 'O título precisa ter no mínimo 4 caracteres.'),
  body: yup
    .string()
    .required('O texto é obrigatório.')
    .min(8, 'O texto precisa ter no mínimo 8 caracteres.'),
  rating: yup
    .string()
    .required('O avaliação é obrigatória.')
    .test('is-num-5', 'A avaliação deve ser um número entre 1 e 5.', val => {
      return parseInt(val) > 0 && parseInt(val) < 6;
    }), // O input sempre receberá uma string por padrão
});

export default function ReviewForm({ addReview }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: '', body: '', rating: '' }}
        validationSchema={reviewSchema}
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
              onBlur={props.handleBlur('title')}
            />
            <TextInput style={globalStyles.errorText}>
              {props.touched.title && props.errors.title}
            </TextInput>

            <TextInput
              multiline
              placeholder="Texto da avaliação"
              onChangeText={props.handleChange('body')}
              value={props.values.body}
              style={globalStyles.input}
              onBlur={props.handleBlur('body')}
            />
            <TextInput style={globalStyles.errorText}>
              {props.touched.body && props.errors.body}
            </TextInput>

            <TextInput
              keyboardType="numeric"
              placeholder="Avaliação (1-5)"
              onChangeText={props.handleChange('rating')}
              value={props.values.rating}
              style={globalStyles.input}
              onBlur={props.handleBlur('rating')}
            />
            <TextInput style={globalStyles.errorText}>
              {props.touched.rating && props.errors.rating}
            </TextInput>

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
