import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useDispatch} from 'react-redux';

const Screen1 = () => {
  const dispatch = useDispatch();

  return (
  <View style={styles.wrapper}>
      <Text>Screen2</Text>
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
  items: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  item: {
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.4)',
    margin: 5,
  },
  itemActive: {
    backgroundColor: 'yellow',
  },
});

export default Screen1;
