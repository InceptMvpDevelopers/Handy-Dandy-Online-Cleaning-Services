import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import usersReducer from './usersSlice';
import subcategoryReducer from  './subcategories'
import  SubCategory2Reducer  from './subcategories2';
import selectedSubCategoryReducer from './selectedSubCategorySlice'
import servicesSliceReducer from './servicesSlice'
import applyFormReducer from './applyFormSlice';
import addOnsReducer from './add_onsSlice'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    users: usersReducer,
    subcategories: subcategoryReducer,
    subcategories2: SubCategory2Reducer,
    selectedSubCategory: selectedSubCategoryReducer,
    services: servicesSliceReducer,
    applyForm: applyFormReducer,
    addOn: addOnsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 