import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddProduct from './components/AddProduct'
import Products from './components/Products'
import EditProduct from './components/EditProduct'
import Product from './components/Product'
import Header from './components/Header'
import axios from 'axios'

function App() {
  const [products, setProducts] = useState([])
  const [reloadProducts, setReloadProducts] = useState(true)

  useEffect(() => {
    if (reloadProducts) {
      const consultApi = async () => {
        // Consultar la api de json-server
        const result = await axios.get('http://localhost:4000/restaurant')
        setProducts(result.data)
      }
      consultApi()
    }

    // Cambiar a false la recarga de los productos
    setReloadProducts(false)
  }, [reloadProducts])

  return (
    <Router>
      <Header />
      <main className="container mt-5">
        <Switch>
          <Route
            exact
            path="/products"
            render={() => (
              <Products
                products={products}
                setReloadProducts={setReloadProducts}
              />
            )}
          />
          <Route
            exact
            path="/new-product"
            render={() => <AddProduct setReloadProducts={setReloadProducts} />}
          />
          <Route exact path="/products/:id" component={Product} />
          <Route
            exact
            path="/products/edit/:id"
            render={props => {
              // Tomar el ID del producto
              const idProduct = parseInt(props.match.params.id)

              // El producto que se pasa al state
              const product = products.filter(
                product => product.id === idProduct
              )

              return (
                <EditProduct
                  product={product[0]}
                  setReloadProducts={setReloadProducts}
                />
              )
            }}
          />
        </Switch>
      </main>
      <p className="mt-4 p2 text-center">Todos los derechos reservados</p>
    </Router>
  )
}

export default App
