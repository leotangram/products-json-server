import React, { useState } from 'react'
import Error from './Error'

function AddProduct() {
  // States
  const [saurceName, setSaurceName] = useState('')
  const [saurcePrice, setSaurcePrice] = useState('')
  const [category, setCategory] = useState('')
  const [error, setError] = useState(false)

  const readRadioValue = e => {
    setCategory(e.target.value)
  }

  const addProduct = e => {
    e.preventDefault()
    if (saurceName === '' || saurcePrice === '' || category === '') {
      setError(true)
      return
    }
    setError(false)

    // Crear el nuevo producto
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
            onChange={e => setSaurcePrice(e.target.value)}
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

export default AddProduct
