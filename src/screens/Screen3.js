import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import routes from 'src/navigation/routes';

const Screen3 = ({navigation}) => {
  return (
    <View style={styles.wrapper}>
      <Text>Screen3</Text>
      <Button
        title="go up the stack"
        onPress={() => navigation.navigate(routes.screen1)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Screen3;
