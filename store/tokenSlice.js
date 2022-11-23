import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: true,
  searchResults: [],
  isLoadingResults: false,
  selectedContract: null,
  selectedToken: null,
  collection: null,
  isLoadingCollections: false,
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
      state.isLoadingResults = false;
    },
    setIsLoadingResults: (state, action) => {
      state.isLoadingResults = action.payload;
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
    setIsLoadingCollections: (state, action) => {
      state.isLoadingCollections = action.payload;
    },
    setTransactions: (state, action) => {
      state.transactions = action.payload;
    },
  },
});

export const {
  toggleTheme,
  setSearchResults,
  setIsLoadingResults,
  setSelectedContract,
  setSelectedToken,
  setCollection,
  setIsLoadingCollections,
  setTransactions,
} = tokenSlice.actions;

export default tokenSlice.reducer;
