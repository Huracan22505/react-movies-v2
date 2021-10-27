import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducers } from './reducers';
import { rootSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();
// const middleware = [sagaMiddleware, logger];

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
