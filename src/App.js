import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer"
import Home from "./pages/home/Home";
import wishlist from "./pages/wishlist/wishlist";
import Faq from "./pages/footer/faq/Faq";
import TermsAndConditions from "./pages/footer/termsAndConditions/TermsAndConditions";
import Cart from "./pages/cart/Cart";
import Grocery from "./pages/categories/grocery/Grocery";
import Login from "./pages/Login"
import Baby from './pages/babyNeeds/Baby'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  let [loaded, setload] = useState(false);

  useEffect(() => {});

  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
        <Route path={"/login"} exact component={Login} />
          <Route path={"/"} exact component={Home} />
          <Route path={"/faq"} component={Faq} />
          <Route
            path={"/terms-and-conditions"}
            component={TermsAndConditions}
          />
          <Route path={"/wishlist"} component={wishlist} />
          <Route path={"/cart"} component={Cart} />
          <Route path={"/categories-grocery"} component={Grocery} />
          <Route path={"/baby"} component={Baby} />



          {/* this one should place always bottom */}
          <Route path={"/*"} exact component={Home} />
          
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
