import React, { Fragment } from 'react'
import ProductList from './ProductList'

function Product({ products }) {
  return (
    <Fragment>
      <h1 className="text-center">Datos del producto</h1>
      <ul className="list-group-mt-5">
        {products.map(product => (
          <ProductList key={product.id} product={product} />
        ))}
      </ul>
    </Fragment>
  )
}

export default Product
