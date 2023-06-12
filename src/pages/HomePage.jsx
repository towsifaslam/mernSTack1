import React from 'react'
import Product from'../components/ProductCart';
import { useFetchProductsQuery } from '../feture/products/productsApi';
export default function HomePage() {
  const { data: products, isLoading, isError, error } = useFetchProductsQuery() || {};
 console.log(products)
  return (
    <div>HomePage</div>
  )
}
