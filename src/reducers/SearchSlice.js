import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    query: '',
    filter: [],
  },
  reducers: {
    searchQuery: (state, action) => {
      state.query = action.payload;
    },
    addFilter: (state, action) => {
      state.filter = [...state.filter, action.payload];
    },
    removeFilter: (state, action) => {
      state.filter = state.filter.filter((value) => value !== action.payload);
    },
  },
});

export const selectSearch = (state) => state.search;
export const { searchQuery, addFilter, removeFilter } = searchSlice.actions;

export default searchSlice.reducer;
