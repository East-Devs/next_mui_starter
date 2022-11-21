import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import tokenReducer from './tokenSlice';
import { createWrapper } from 'next-redux-wrapper';

const persistConfig = {
  key: 'milonis',
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  tokens: tokenReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: true,
});

const setupStore = (context) => store;

const makeStore = (context) => setupStore(context);

export const persistor = persistStore(store);

export const wrapper = createWrapper(makeStore);
