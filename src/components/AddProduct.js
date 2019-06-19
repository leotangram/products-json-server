import React, { useState } from 'react'
import Error from './Error'
import axios from 'axios'
import Swal from 'sweetalert2'
import { withRouter } from 'react-router-dom'

function AddProduct({ history }) {
  // States
  const [saurceName, setSaurceName] = useState('')
  const [saucerPrice, setSaucerPrice] = useState('')
  const [category, setCategory] = useState('')
  const [error, setError] = useState(false)

  const readRadioValue = e => {
    setCategory(e.target.value)
  }

  const addProduct = async e => {
    e.preventDefault()
    if (saurceName === '' || saucerPrice === '' || category === '') {
      setError(true)
      return
    }
    setError(false)

    // Crear el nuevo producto
    try {
      const result = await axios.post(`http://localhost:4000/restaurant`, {
        saurceName,
        saucerPrice,
        category
      })
      console.log(result)
      if (result.status === 201) {
        Swal.fire(
          'Producto creado',
          'El producto se creó correctamente',
          'success'
        )
      }
    } catch (error) {
      console.log(error)
      Swal.fire({
        type: 'error',
        title: '',
        text: 'Hubo un error, vuelve a intentarlo'
      })
    }

    // Regirigir al usuario a productos
    history.push('/products')
  }

  return (
    <div className="col-md-8 mx-auto ">
      <h1 className="text-center">Agregar nuevo producto</h1>
      {error ? <Error message="Todos los campos son obligatorios" /> : null}
      <form className="mt-5" onSubmit={addProduct}>
        <div className="form-group">
          <label>Nombre Platillo</label>
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Nombre Platillo"
            onChange={e => setSaurceName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Precio Platillo</label>
          <input
            type="number"
            className="form-control"
            name="price"
            placeholder="Precio Platillo"
            onChange={e => setSaucerPrice(e.target.value)}
          />
        </div>

        <legend className="text-center">Categoría:</legend>
        <div className="text-center">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="category"
              value="postre"
              onChange={readRadioValue}
            />
            <label className="form-check-label">Postre</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="category"
              value="bebida"
              onChange={readRadioValue}
            />
            <label className="form-check-label">Bebida</label>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="category"
              value="cortes"
              onChange={readRadioValue}
            />
            <label className="form-check-label">Cortes</label>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="category"
              value="ensalada"
              onChange={readRadioValue}
            />
            <label className="form-check-label">Ensalada</label>
          </div>
        </div>

        <input
          type="submit"
          className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3"
          value="Agregar Producto"
        />
      </form>
    </div>
  )
}

export default withRouter(AddProduct)
