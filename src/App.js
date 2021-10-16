import React form 'react';
import  { Switch, Route, Link, BrowserRouter, as Router } from 'react-router-dom';

import AddProduct from './components/AddProduct';
import Login from './components/Login',
import Cart from './components/Cart';
import ProductList from './components/ProductList';
import Context from './Context';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      cart: {},
      products: {}
    };
    this. routerRef = React.createRef;
  }

  render() {
    return (
      <Context.Provider
      value = {{
        ...this.state,
        removeFromCart: this.removeFromCart,
        addToCart: this.addToCart,
        login: this.login,
        addProduct: this.addProduct,
        clearCart: this.clearCart,
        checkout: this.checkout

      }}
      >
        <Router ref = {this.routerRef}>
          <div className="App">
            <nav className = "navbar container"
            role = "navigation"
            aria-label='main navigation'
            >
              <div className = "navbar-brand">
                <b className = "navbar-item is-size-4">Simoneta</b>

              </div>

            </nav>

          </div>

        </Router>

      </Context.Provider>
    )
  }
}

export default App;
