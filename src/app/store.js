import {configureStore} from"@reduxjs/toolkit";
import productSlice from "../feture/products/productSlice";
 
import { productApi } from "../feture/products/productsApi";


export const store = configureStore({
  reducer:{
       [productApi.reducerPath] : productApi.reducer,
     products: productSlice
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(productApi.middleware)
})