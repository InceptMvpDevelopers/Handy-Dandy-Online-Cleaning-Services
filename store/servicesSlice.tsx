import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "@/integrations/supabase/client";
import { services_3 } from "@/app/types/types";


type servicesState={
    loading: boolean;
    error: string | null;
    services: services_3[];
}
const initialState :servicesState = {
loading: false,
error: null,
services: []
}




export const fetchServices = createAsyncThunk<services_3[], void, { rejectValue: string }>(
  'services/fetchServices',
  async (_, { rejectWithValue }) => {
    try {
      const { data, error } = await supabase.from("services_3").select("*");
      if (error) {
        return rejectWithValue(error.message);
      }
      console.log(data);
      
      return data as services_3[]; // or ideally, fix type name to Subcategory
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);


const servicesSlice = createSlice({
    name: 'servicesSlice',
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(fetchServices.pending, (state)=>{
state.loading = true;
state.error=null
        })
        .addCase(fetchServices.fulfilled, (state, action)=>{
            state.loading=false;
state.services = action.payload;
        })
        .addCase(fetchServices.rejected, (state, action)=>{
state.loading = false;
state.error = action.error?.message ||  "Failed To Fetch Sub Categories"; 
        })

    }
})
export default servicesSlice.reducer;