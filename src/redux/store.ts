import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../redux/features/counterSlice';
import { foodApi } from './api/baseApi';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [foodApi.reducerPath]: foodApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>{
    return getDefaultMiddleware().concat(foodApi.middleware)
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
