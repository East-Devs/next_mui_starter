import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: true,
  searchResults: [],
  selectedContract: null,
  selectedToken: null,
  collection: null,
  isLoadingCollection: false,
  transactions: [],
};

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    toggleTheme: (state, _action) => {
      state.theme = !state.theme;
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
    setSelectedContract: (state, action) => {
      state.selectedContract = action.payload;
    },
    setSelectedToken: (state, action) => {
      state.selectedToken = action.payload;
    },
    setCollection: (state, action) => {
      state.collection = action.payload;
    },
    setTransactions: (state, action) => {
      state.transactions = action.payload;
    },
  },
});

export const {
  toggleTheme,
  setSearchResults,
  setSelectedContract,
  setSelectedToken,
  setCollection,
  setTransactions,
} = tokenSlice.actions;

export default tokenSlice.reducer;
