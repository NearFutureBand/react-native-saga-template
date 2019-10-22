import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';

import { setNavigator } from './navigation/navigationService';
import Navigator from './navigation';

export default class AppComponent extends Component {
  componentDidMount() {
    setNavigator(this.navigator);
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Navigator
          ref={nav => {
            this.navigator = nav;
          }}
        />
      </SafeAreaView>
    );
  }
}
