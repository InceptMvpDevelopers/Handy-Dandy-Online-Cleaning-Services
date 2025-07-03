import { createSlice} from "@reduxjs/toolkit";

type SubCategoryID =  number | null;

const initialState: SubCategoryID = null;

const selectedSubCategory =createSlice({
name: 'selectedSubCategory',
initialState,
reducers: {
    set: (state, action ) => {
        return action.payload;
    },

    clear: ()=> {
        return null;
    }
}
})

export const {set, clear} = selectedSubCategory.actions;

export default selectedSubCategory.reducer;