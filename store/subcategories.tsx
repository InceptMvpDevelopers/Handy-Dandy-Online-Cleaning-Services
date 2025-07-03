import { createSlice,  createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { fetchProducts } from "./productsSlice";
import { supabase } from "@/integrations/supabase/client";


export type subcategory = {
id: number;
title: string;
title2: string;
description: string;
image_url: string;
main_category: string;
};

type SubcategoryState = {
    subcategories: subcategory[];
    loading: boolean;
    error: string | null;
}

const initialState: SubcategoryState = {
    subcategories: [],
    loading: false,
    error: null
}


export const fetchSubcategories = createAsyncThunk<subcategory[], void, { rejectValue: string }>(
  'subcategories/fetchSubCategories',
  async (_, { rejectWithValue }) => {
    try {
      const { data, error } = await supabase.from("sub_categories_1").select("*");
      if (error) {
        return rejectWithValue(error.message);
      }
      console.log(data);
      
      return data as subcategory[]; // or ideally, fix type name to Subcategory
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);



const subcategoriesSlice = createSlice({
    name: 'subcategories',
    initialState,
reducers:{},
extraReducers: (builder)=>{
    builder.addCase(fetchSubcategories.pending, (state) =>{
        state.loading = true;
        state.error = null;
    })
    .addCase(fetchSubcategories.fulfilled, (state, action)=>{
        state.loading = false;
        state.subcategories = action.payload;
    })
    .addCase(fetchSubcategories.rejected, (state, action)=>{
        state.loading = false;
        state.error = action.error?.message || "Failed To Fetch Sub Categories"; 
    })
}
})


export default subcategoriesSlice.reducer;