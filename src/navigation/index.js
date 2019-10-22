import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import routes from './routes';

import Screen1 from 'src/screens/Screen1';
import Screen2 from 'src/screens/Screen2';
import Screen3 from 'src/screens/Screen3';
import SignIn from 'src/screens/SignIn';

const SignInStack = createStackNavigator({
  SignIn,
});

const Stack3 = createStackNavigator({
  [routes.screen3]: Screen3,
  [routes.screen1]: Screen1,
});

const Stack1 = createStackNavigator({
  [routes.screen1]: {
    screen: Screen1,
    navigationOptions: {
      header: null,
      headerBackTitle: null,
    },
  },
  [routes.screen2]: {
    screen: Screen2,
    navigationOptions: {
      title: 'Screen 2 in stack 1',
      //headerTransparent: true,
      //headerBackTitle: null,
      headerTintColor: 'black',
      /*headerTitleStyle: {
        fontFamily: montserrat.semiBold,
        fontSize: 20,
        color: appColors.white,,
      },
      headerStyle: {
        backgroundColor: appColors.primary,,
      },
      headerLeftContainerStyle: {
        marginLeft: 10,,
      },*/
    },
  },
});

const AuthSwitch = createStackNavigator({
  [routes.signIn]: {
    screen: SignInStack,
  },
});

const Stack2 = createStackNavigator(
  {
    [routes.screen1]: {
      screen: Screen1,
      navigationOptions: {
        header: null,
        headerBackTitle: null,
      },
    },
    [routes.screen2]: {
      screen: Screen2,
      navigationOptions: {
        title: 'Navigation title',
        headerBackTitle: null,
        headerTintColor: 'blue',
        headerTitleStyle: {
          fontSize: 20,
        },
        headerStyle: {
          backgroundColor: 'white',
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        headerLeftContainerStyle: {
          marginLeft: 10,
        },
      },
    },
    [routes.screen3]: {
      screen: Screen3,
      navigationOptions: ({ navigation }) => {
        return {
          title: navigation.getParam('name'),
          headerBackTitle: null,
          headerTintColor: 'blue',
          headerTitleStyle: {
            fontSize: 20,
            color: 'blue',
          },
          headerStyle: {
            backgroundColor: 'white',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerLeftContainerStyle: {
            marginLeft: 10,
          },
        };
      },
    },
    /*[routes.logNow]: {
    screen: LogNowContainer,
    navigationOptions: ({navigation}) => {
      return {
        title: 'Log now',
        headerTintColor: colors.blue[1],
        headerTitleStyle: {
          fontFamily: montserrat.semiBold,
          fontSize: 20,
          color: colors.blue[1],,
        },
        headerStyle: {
          backgroundColor: appColors.white,
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 1,
          borderBottomColor: colors.purple[5],,
        },
        headerLeftContainerStyle: {
          marginLeft: 10,,
        },
        headerRight: (
          <RightButton onPress={navigation.getParam('onPressRightButton')} />,
        ),
      };
    },,
  },*/
  },
  {
    initialRouteName: routes.buildCarePlan,
    defaultNavigationOptions: {
      headerBackTitle: null,
    },
  }
);

const App = createBottomTabNavigator(
  {
    [routes.tabLeft]: {
      screen: Stack3,
      /*navigationOptions: {
      tabBarIcon: ({focused}) => (
        <Tab
          isFocused={focused}
          tabName="Home"
          inactiveTabIcon={homeTab}
          activeTabIcon={homeTabActive}
        />
      ),
    },*/
      showLabel: false,
    },
    [routes.tabRight]: {
      screen: Stack1,
      /*navigationOptions: ({navigation}) => {
      let tabBarVisible = true;
      if (navigation.state.index > 0) {
        switch (navigation.state.routes[1].routeName) {
          case routes.logNow:
          case routes.logNowAppointment:
            tabBarVisible = false;
        }
      }
      return {
        title: 'My Care',
        tabBarIcon: ({focused}) => {
          console.log(focused, 'focus');
          return (
            <Tab
              isFocused={focused}
              tabName="My Care"
              inactiveTabIcon={myCareTab}
              activeTabIcon={myCareTabActive}
            />
          );
        },
        tabBarVisible,
      };
    },*/
      showLabel: true,
    },
  },
  {
    initialRouteName: routes.tabLeft,
    tabBarOptions: {
      activeTintColor: 'green',
      inactiveTintColor: 'blue',
      style: {
        borderTopColor: 'purple',
      },
      labelStyle: {
        //fontFamily: montserrat.regular,
        color: 'black',
      },
    },
  }
);

const AuthAppSwitch = createSwitchNavigator(
  {
    /*[routes.authLoading]: AuthLoading,*/
    Auth: AuthSwitch,
    App,
  },
  {
    initialRouteName: 'Auth',
  }
);

export default createAppContainer(AuthAppSwitch);
