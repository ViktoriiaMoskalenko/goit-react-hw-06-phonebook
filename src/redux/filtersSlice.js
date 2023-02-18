import { createSlice } from '@reduxjs/toolkit';
// import { statusFilters } from './constants';

// const filtersInitialState = {
//   status: JSON.parse(localStorage.getItem('contacts')) ?? [],
// };

const filtersSlice = createSlice({
  name: 'filters',
  initialState: '',
  reducers: {
    setStatusFilter(state, action) {
      return action.payload;
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
