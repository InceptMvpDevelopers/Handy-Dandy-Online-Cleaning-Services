import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "@/integrations/supabase/client";

export type SubCategory2 = {
  id: number;
  related_sub_category_1: number;
  title: string;
  description: string;
};

type SubCategory2State = {
  SubCategories2: SubCategory2[];
  loading: boolean;
  error: string | null;
};

const initialState: SubCategory2State = {
  SubCategories2: [],
  error: null,
  loading: false,
};

export const fetchSubCategories2 = createAsyncThunk<
  SubCategory2[],
  void,
  { rejectValue: string }
>("subCategory2/fetchAll", async (_, { rejectWithValue }) => {
  try {
    const { data, error } = await supabase.from("sub_categories_2").select("*");
    if (error) {
      return rejectWithValue(error.message);
    }
    return data as SubCategory2[];
  } catch (err: any) {
    return rejectWithValue(err.message);
  }
});


const subCategory2Slice = createSlice({
  name: "SubCategory2",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubCategories2.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSubCategories2.fulfilled, (state, action) => {
        state.loading = false;
        state.SubCategories2 = action.payload;
      })
      .addCase(fetchSubCategories2.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error?.message || "Failed To Fetch Sub Categories";
      });
  },
});

export default subCategory2Slice.reducer;
