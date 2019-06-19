import React, { useState } from 'react'
import Error from './Error'

function EditProduct() {
  // States
  const [error, setError] = useState(false)
  const [category, setCategory] = useState('')

  const readRadioValue = e => {
    setCategory(e.target.value)
  }

  const editProduct = e => {}

  return (
    <div className="col-md-8 mx-auto ">
      <h1 className="text-center">Editar producto</h1>
      {error ? <Error message="Todos los campos son obligatorios" /> : null}
      <form className="mt-5" onSubmit={editProduct}>
        <div className="form-group">
          <label>Nombre Platillo</label>
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Nombre Platillo"
          />
        </div>

        <div className="form-group">
          <label>Precio Platillo</label>
          <input
            type="number"
            className="form-control"
            name="price"
            placeholder="Precio Platillo"
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
          value="Editar Producto"
        />
      </form>
    </div>
  )
}

export default EditProduct
