import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Home from "./home";
import ProductMonitor from "./pages/product-monitor";
import ProductControl from './pages/product-control';
import ProductResource from './pages/product-resource';
import ProductNetwork from './pages/product-network';
import ProductEaton from './pages/product-eaton';
import ProductEatonMcb from './pages/product-eatonmcb';
import ProductEatonAcb from './pages/product-eatonacb';
import ProductEatonContactor from './pages/product-eatoncontactor';
import FailureControl from './pages/dse-fail-control';
import SharingControl from './pages/dse-sharing-control';
import StartControl from './pages/dse-start-control';
import LubiSmps from './pages/product-lubi';
import ProductAmpturnTape from './pages/product-lttape';
import ProductAmpturnResin from './pages/product-ltresin';
import ProductAmpturnMoulded from './pages/product-ltmould';
// import ProductSeco from './pages/product-seco';
// import ProductLeap from './pages/product-leap';
// import ProductKalaivani from './pages/product-kalaivani';
import ProductRishab from './pages/product-rishab';

const NavBarTop = () => {
  return (
    <Router>
      <Switch>
         <Route exact path="/" ><Home /></Route>
        <Route path ="/prodsm"> <ProductMonitor /> </Route>
        <Route path ="/prodsc"> <ProductControl /> </Route>
        <Route path ="/prodsr"> <ProductResource /> </Route>
        <Route path ="/prodsn"> <ProductNetwork /> </Route>
        <Route path ="/prodea"> <ProductEaton /> </Route>
        <Route path ="/prodemcb"><ProductEatonMcb /></Route>
        <Route path ="/prodeacb"><ProductEatonAcb /></Route>
        <Route path ="/prodeco"><ProductEatonContactor /></Route>
        <Route path ="/prodfc"> <FailureControl /> </Route>
        <Route path ="/prodsh"> <SharingControl /> </Route>
        <Route path ="/prodst"> <StartControl /> </Route>
        <Route path ="/prodlb"> <LubiSmps /> </Route>
        <Route path = "/prodtp"> <ProductAmpturnTape/> </Route>
        <Route path = "/prodrn"> <ProductAmpturnResin/> </Route>
        <Route path = "/prodmd"> <ProductAmpturnMoulded/> </Route>
        <Route path = "/prodrb"> <ProductRishab/> </Route>
      </Switch>
    </Router>
  );
}

export default NavBarTop;