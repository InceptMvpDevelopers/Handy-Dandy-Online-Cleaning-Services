import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { supabase } from '@/integrations/supabase/client'; // or your path
import { string } from 'zod';
import { addOn } from '@/app/types/types';

// ✅ Single clean interface for individual AddOn


// ✅ Separate state interface
interface addOnState {
  addOns: addOn[];
  loading: boolean;
  error: string | null;
}

const initialState: addOnState = {
  addOns: [],
  loading: false,
  error: null,
};

// ✅ Corrected return type for thunk
export const fetchAddOns = createAsyncThunk<addOn[], void, { rejectValue: string }>(
  'addOns/fetchAddOns',
  async (_, { rejectWithValue }) => {
    try {
      const { data, error } = await supabase.from("addons_4").select("*");
      if (error) {
        return rejectWithValue(error.message);
      }
      console.log(data);
      
      return data as addOn[];
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

const addOnsSlice = createSlice({
  name: 'addOnsSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddOns.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAddOns.fulfilled, (state, action: PayloadAction<addOn[]>) => {
        state.loading = false;
        state.addOns = action.payload; // ✅ correct key
      })
      .addCase(fetchAddOns.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch AddOns";
      });
  },
});

export default addOnsSlice.reducer;
