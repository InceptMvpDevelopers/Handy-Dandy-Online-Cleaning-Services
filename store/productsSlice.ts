import { createSlice, createAsyncThunk, PayloadAction, AnyAction, Draft, ActionReducerMapBuilder } from '@reduxjs/toolkit';
import axios from 'axios';

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  thumbnail: string;
  // Add other fields as needed
}

interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk<Product[]>(
  'products/fetchProducts',
  async () => {
    const response = await axios.get('https://dummyjson.com/products');
    return response.data.products;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<ProductsState>) => {
    builder
      .addCase(fetchProducts.pending, (state: Draft<ProductsState>) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state: Draft<ProductsState>, action: PayloadAction<Product[]>) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state: Draft<ProductsState>, action: AnyAction) => {
        state.loading = false;
        state.error = action.error?.message || 'Failed to fetch products';
      });
  },
});

export default productsSlice.reducer; 