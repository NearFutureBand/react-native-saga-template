import {NavigationActions} from 'react-navigation';

const config = {};

export const setNavigator = nav => {
  if (nav) {
    config.navigator = nav;
  }
};

export const getCurrentRoute = () => {
  let route = config.navigator.state.nav;
  while (route.routes) {
    route = route.routes[route.index];
  }
  return route;
};

export const navigate = (routeName, params) => {
  if (config.navigator && routeName) {
    const action = NavigationActions.navigate({routeName, params});
    config.navigator.dispatch(action);
  }
};

export const goBack = () => {
  if (config.navigator) {
    const action = NavigationActions.back({});
    config.navigator.dispatch(action);
  }
};
