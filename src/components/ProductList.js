import React from 'react'
import { Link } from 'react-router-dom'

function ProductList({ product }) {
  const deleteProduct = id => {
    console.log('Eliminando', id)
    // TODO: Eliminar los registros
  }
  return (
    <li
      data-category={product.actegory}
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      <p>
        {product.saurceName}{' '}
        <span className="font-weight-bold">${product.saucerPrice}</span>
      </p>
      <div>
        <Link
          to={`/products/edit/${product.id}`}
          className="btn btn-success mr-2"
        >
          Editar
        </Link>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => deleteProduct(product.id)}
        >
          Eliminar &times;
        </button>
      </div>
    </li>
  )
}

export default ProductList
