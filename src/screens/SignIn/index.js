import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {useDispatch} from 'react-redux';

import {loginRequest} from 'src/actions';

const Screen1 = ({navigation}) => {
  const dispatch = useDispatch();

  const onDonePress = () => {
    dispatch(loginRequest({phone: '+112121221', password: 'xxxxx'}));
  };

  return (
    <View style={styles.wrapper}>
      <TextInput style={styles.input} />
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
