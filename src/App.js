import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddProduct from './components/AddProduct'
import Products from './components/Products'
import EditProduct from './components/EditProduct'
import Product from './components/Product'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/new-product" component={AddProduct} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Product} />
        <Route exact path="/products/edit/:id" component={EditProduct} />
      </Switch>
    </Router>
  )
}

export default App
