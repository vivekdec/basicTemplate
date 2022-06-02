import AsyncStorage from '@react-native-async-storage/async-storage';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, compose, createStore, Dispatch, MiddlewareAPI } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';

import rootReducer from '../reducers';
import rootSaga from '../sagas';


const persistConfig = {
  storage: AsyncStorage,
  key: 'root'
}

const sagaMiddleware = createSagaMiddleware()
const reducers = persistReducer(persistConfig, rootReducer)

const appMiddleware = (_store: MiddlewareAPI) => (next: Dispatch) => (action: any) => {
  next(action)
}

const middlewares = [sagaMiddleware, appMiddleware]
const enhancers = [applyMiddleware(...middlewares)]
export const store = createStore(reducers, compose(...enhancers))
sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)
