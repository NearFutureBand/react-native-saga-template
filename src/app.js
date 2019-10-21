import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import firebase from 'react-native-firebase';

import {setNavigator} from './navigation/navigationService';
import Navigator from './navigation';

export default class AppComponent extends Component {
  componentDidMount() {
    //console.log(firebase, firebase.auth());
    firebase
      .messaging()
      .getToken()
      .then(fcmToken => {
        console.log(fcmToken);
      });
    setNavigator(this.navigator);

    firebase
      .auth()
      .signInWithEmailAndPassword('test@test.com', 'password')
      .then(console.log)
      .catch(function(error) {
        // Handle Errors here.
        console.log(error);
        // ...
      });
  }

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
