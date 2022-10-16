import {
  Action,
  configureStore,
  EnhancedStore,
  ThunkAction,
} from '@reduxjs/toolkit';
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
import { combineReducers, Store } from 'redux';
import counterReducer from './counterSlice';
// import logger from "redux-logger";
import accountReducer from './usersSlice';
import { createWrapper, MakeStore } from 'next-redux-wrapper';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  counter: counterReducer,
  users: accountReducer,
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

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
