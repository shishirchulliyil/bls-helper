import { configureStore } from '@reduxjs/toolkit';
import walkinReducer from './walkinSlice';

const store = configureStore({
  reducer: {
    walkin: walkinReducer,
  },
});

export default store;
