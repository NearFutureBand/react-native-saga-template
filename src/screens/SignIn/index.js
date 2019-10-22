import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { signInStart, changeCredentials } from 'src/actions';
import { getEmail, getPassword } from 'src/selectors';

const Screen1 = ({ navigation }) => {
  const dispatch = useDispatch();
  const email = useSelector(getEmail);
  const password = useSelector(getPassword);

  const onDonePress = () => {
    dispatch(signInStart({ email, password }));
  };

  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={text => {
          dispatch(changeCredentials({ inputName: 'email', value: text }));
        }}
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={text =>
          dispatch(changeCredentials({ inputName: 'password', value: text }))
        }
      />
      <Button title="Done" onPress={onDonePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 100,
    borderWidth: 1,
    borderColor: 'red',
  },
});

export default Screen1;
