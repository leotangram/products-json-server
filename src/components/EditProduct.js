import React, { useState, useRef } from 'react'
import Error from './Error'

function EditProduct({ product }) {
  const { saurceName, saucerPrice } = product

  // Generar los refs
  const saucerPriceRef = useRef('')
  const saurceNameRef = useRef('')

  // States
  const [error, setError] = useState(false)
  const [category, setCategory] = useState('')

  const readRadioValue = e => {
    setCategory(e.target.value)
  }

  const editProduct = e => {
    e.preventDefault()

    // Revisar si cambió la categoría, de lo contrario asignar el mismo valor
    let categorySaurce = category === '' ? product.category : category

    // Obtener los valores del formulario
    const editSaucer = {
      saucerPrice: saucerPriceRef.current.value,
      saurceName: saurceNameRef.current.value,
      category: categorySaurce
    }
    console.log(editSaucer)
  }

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
            ref={saurceNameRef}
            defaultValue={saurceName}
          />
        </div>

        <div className="form-group">
          <label>Precio Platillo</label>
          <input
            type="number"
            className="form-control"
            name="price"
            placeholder="Precio Platillo"
            ref={saucerPriceRef}
            defaultValue={saucerPrice}
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
              defaultChecked={product.category === 'postre'}
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
              defaultChecked={product.category === 'bebida'}
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
              defaultChecked={product.category === 'cortes'}
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
              defaultChecked={product.category === 'ensalada'}
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
