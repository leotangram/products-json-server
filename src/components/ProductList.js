import React from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import axios from 'axios'

function ProductList({ product, setReloadProducts }) {
  const deleteProduct = id => {
    console.log('Eliminando', id)
    // TODO: Eliminar los registros
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Un platillo eliminado no se puede recuperar',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d5',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'Cancelar'
    }).then(async result => {
      if (result.value) {
        try {
          const url = `http://localhost:4000/restaurant/${id}`
          const result = await axios.delete(url)
          if (result.status === 200) {
            Swal.fire('Eliminado!', 'El producto se ha eliminado.', 'success')
            // Consultar la api nuevamente
            setReloadProducts(true)
          }
        } catch (error) {
          console.log(error)
          Swal.fire({
            type: 'error',
            title: '',
            text: 'Hubo un error, vuelve a intentarlo'
          })
        }
      }
    })
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
