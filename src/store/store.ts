import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '~/store/reducers';

export const store = createStore(rootReducer, {}, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
