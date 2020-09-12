import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import Product from './Components/Product/Product';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './Components/review/Review';

import Inventory from './Components/inventory/Inventory';
import NotFound from './Components/not found/NotFound';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import Login from './Components/Login/Login';

function App() {
  return (
    <div>
    <Header></Header>
     <Router>
       <Switch>

         <Route path = "/shop">
         <Shop></Shop>
         </Route>

         <Route path = "/review">
           <Review></Review>
         </Route>
        
         <Route exact path = "/">
         <Shop></Shop>
         </Route>

        <Route path = "/inventory">
          <Inventory></Inventory>
        </Route>
        
        <Route path = "/product/:productKey">
          <ProductDetail></ProductDetail>
        </Route>
        <Route>
          <Login></Login>
        </Route>
        <Route path = "*">
          <NotFound></NotFound>
        </Route>
       </Switch>

     </Router>
     
     
    
    </div>
  );
}

export default App;
