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

  useEffect(() => {
    const consultApi = async () => {
      // Consultar la api de json-server
      const result = await axios.get('http://localhost:4000/restaurant')
      setProducts(result.data)
    }
    consultApi()
  }, [])

  return (
    <Router>
      <Header />
      <main className="container mt-5">
        <Switch>
          <Route
            exact
            path="/products"
            render={() => <Products products={products} />}
          />
          <Route exact path="/new-product" component={AddProduct} />
          <Route exact path="/products/:id" component={Product} />
          <Route exact path="/products/edit/:id" component={EditProduct} />
        </Switch>
      </main>
      <p className="mt-4 p2 text-center">Todos los derechos reservados</p>
    </Router>
  )
}

export default App
