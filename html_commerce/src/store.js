import { configureStore, createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: { term: '', category: 'all' },
  reducers: {
    setSearchTerm: (state, action) => { state.term = action.payload; },
    setCategory: (state, action) => { state.category = action.payload; }
  }
});

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => { state.push(action.payload); },
    removeFromCart: (state, action) => state.filter((_, i) => i !== action.payload)
  }
});

export const { setSearchTerm, setCategory } = searchSlice.actions;
export const { addToCart, removeFromCart } = cartSlice.actions;

const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    cart: cartSlice.reducer
  }
});

export default store;