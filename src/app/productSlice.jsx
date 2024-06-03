import { createSlice } from '@reduxjs/toolkit';
import { useGetPostsQuery } from '../assets/apiSlice';

const productsSlice = createSlice({
  name: 'products',
  initialState: { data: null, isLoading: false, error: null },
  reducers: {
    setProducts: (state, action) => {
      state.data = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setProducts, setLoading, setError } = productsSlice.actions;
export default productsSlice.reducer;


