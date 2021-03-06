import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';

import {setNavigator} from './navigation/navigationService';
import Navigator from './navigation';

export default class AppComponent extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Navigator
          ref={nav => {
            this.navigator = nav;
          }}
        />
      </SafeAreaView>
    );
  }
}
