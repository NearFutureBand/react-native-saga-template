import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Button,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import routes from 'src/navigation/routes';
import {getChosenItems, getPhone} from '../selectors';
import {setChosenItems, loginRequest} from '../actions';

const mockList = new Array(30).fill(0).map((item, i) => ({
  id: i,
  text: i + 1,
}));

const Screen1 = ({navigation}) => {
  const dispatch = useDispatch();
  const chosenItems = useSelector(getChosenItems);
  const phone = useSelector(getPhone);
  const [renderTriggerMagicNumber, triggerRender] = useState(false);

  const onItemClick = index => {
    if (index in chosenItems) {
      delete chosenItems[index];
    } else {
      chosenItems[index] = true;
    }
    dispatch(setChosenItems(chosenItems));
    triggerRender(!renderTriggerMagicNumber);
  };

  return (
    <View style={styles.wrapper}>
      <Text>Test Project</Text>
      <Text>{phone ? phone : 'loading'}</Text>

      <FlatList
        data={mockList}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.items}
        renderItem={({item}) => (
          <TouchableOpacity
            key={item.id}
            style={[styles.item, item.id in chosenItems && styles.itemActive]}
            onPress={() => onItemClick(item.id)}>
            <Text>{item.text}</Text>
          </TouchableOpacity>
        )}
      />
      <Button
        title="go to screen2"
        onPress={() => navigation.navigate(routes.screen2)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
