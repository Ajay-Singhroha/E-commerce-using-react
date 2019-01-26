import React, { Component } from 'react';
import logo from './logo.svg';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Product_list from './Components/Product_list';
import Details from './Components/Details';
import Cart from './Components/Cart';
import Default from './Components/Default';


class App extends Component {    
  render() { 
    return(
        <React.Fragment>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Product_list} />
            <Route path="/details" component={Details} />
            <Route path="/cart" component={Cart} />
            <Route component={Default} />
          </Switch>
          
        </React.Fragment>
    );
  }
}

export default App;
