import React from 'react'
import { useParams } from 'react-router-dom'
import fakeData from '../../fakeData/products.JSON'
import Product from '../Product/Product'

function ProductDetails() {
    const {key}=useParams()
    const product=fakeData.find(pd=>pd.key===key)
    
  return (
    <>
    <Product showAddToCart={false} product={product}></Product>
    </>
  )
}

export default ProductDetails