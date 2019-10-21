import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';

import AppComponent from './app';
import configureStore from './configureStore';
import sagaMiddleware from './configureSaga';
import rootSaga from './saga';

const {store, persistor} = configureStore();
persistor.purge();
sagaMiddleware.run(rootSaga);

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <AppComponent />
    </PersistGate>
  </Provider>
);

export default App;
