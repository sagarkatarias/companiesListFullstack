import { configureStore, combineReducers } from '@reduxjs/toolkit';
import searchReducer from '../reducers/SearchSlice';

const reducers = combineReducers({
  search: searchReducer,
});

export default configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
