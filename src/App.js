import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/HeaderComp/Header";
import About from "./pages/About";
import AddProductPage from "./pages/AddProduct";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Productlist from "./pages/ProductList";
const App = () => {
  const pathname = window.location.pathname;
  return (
    <Router>
      {pathname === "/dashboard" ? "" : <Header />}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/about" component={About} />
        <Route exact path="/products" component={Productlist} />
        <Route exact path="/product/new" component={AddProductPage} />
      </Switch>
    </Router>
  );
};

export default App;
