import { rootApi } from "../api/rootApi";

// RTK Query Endpoints
 export const productApi = rootApi.injectEndpoints({
  // product endpoints 
  endpoints:(builder)=>({
     fetchAllProducts : builder.query({
       query:()=>`/getAlProducts`
     }),
     addProduct: builder.mutation({
      query:(data)=>({
        method:"POST",
        url: `/addProduct`,
        body:data
      })
     })
  })
 })

 export const {useFetchAllProductsQuery,useAddProductMutation} = productApi