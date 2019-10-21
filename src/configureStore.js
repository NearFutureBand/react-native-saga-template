import {compose, createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

//import Reactotron from './ReactotronConfig';
import middleware from './middleware';
import reducer from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const configureStore = () => {
  const store = createStore(
    persistedReducer,
    compose(
      middleware,
      /*Reactotron.createEnhancer(),*/
    ),
  );
  const persistor = persistStore(store);
  return {
    store,
    persistor,
  };
};

export default configureStore;
