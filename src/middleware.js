import {applyMiddleware} from 'redux';
import logger from 'redux-logger';

import sagaMiddleware from './configureSaga';

const middleware = applyMiddleware(sagaMiddleware, logger);

export default middleware;
