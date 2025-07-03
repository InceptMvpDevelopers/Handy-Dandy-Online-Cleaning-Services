import { createSlice, createAsyncThunk, PayloadAction, AnyAction, Draft, ActionReducerMapBuilder } from '@reduxjs/toolkit';
import axios from 'axios';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  image: string;
  age: number;
  gender: string;
  // Add other fields as needed
}

interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
};

export const fetchUsers = createAsyncThunk<User[]>(
  'users/fetchUsers',
  async () => {
    const response = await axios.get('https://dummyjson.com/users');
    return response.data.users;
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<UsersState>) => {
    builder
      .addCase(fetchUsers.pending, (state: Draft<UsersState>) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state: Draft<UsersState>, action: PayloadAction<User[]>) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state: Draft<UsersState>, action: AnyAction) => {
        state.loading = false;
        state.error = action.error?.message || 'Failed to fetch users';
      });
  },
});

export default usersSlice.reducer; 