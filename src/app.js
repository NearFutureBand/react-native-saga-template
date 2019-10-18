import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';

import {setNavigator} from './navigation/navigationService';
import Navigator from './navigation';

export default class AppComponent extends Component {
  componentDidMount() {
    console.log(firebase);
    /*firebase
      .initializeApp()
      .then(console.log)
      .catch(console.log);*/
    /*firebase
      .messaging()
      .getToken()
      .then(fcmToken => {
        console.log(fcmToken);
      });
    setNavigator(this.navigator);*/

    /*firebase
      .initializeApp()
      .auth()
      .signInWithEmailAndPassword('test@test.com', 'password')
      .then(console.log)
      .catch(function(error) {
        // Handle Errors here.
        console.log(error);
        // ...
      });*/
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
