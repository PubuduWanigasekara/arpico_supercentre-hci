import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
// import Wishlist from "./pages/wishlist/Wishlist";
import Faq from "./pages/footer/faq/Faq";
import TermsAndConditions from "./pages/footer/termsAndConditions/TermsAndConditions";
import store_locations from "./pages/store_locations/store_locations";
import Cart from "./pages/cart/Cart";
import Grocery from "./pages/categories/grocery/Grocery";
import Login from "./pages/login/Login";

import Baby from "./pages/babyNeeds/Baby";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  let [loaded, setload] = useState(false);

  let [login, setLogin] = useState(false);

  useEffect(() => {});

  const LoginSet = (type) => {
    setLogin((login = type));
  };

  return (
    <div className="App">
      <Router>
        <Header isLogged={login} logSet={LoginSet} />
        <Switch>
          <Route
            path={"/login"}
            exact
            component={() => <Login logSet={LoginSet} />}
          />
          <Route path={"/"} exact component={Home} />
          <Route path={"/faq"} component={Faq} />
          <Route
            path={"/terms-and-conditions"}
            component={TermsAndConditions}
          />
          {/* <Route path={"/wishlist"} component={Wishlist} /> */}
          <Route path={"/cart"} component={Cart} />
          <Route path={"/categories-grocery"} component={Grocery} />
          <Route path={"/baby"} component={Baby} />
          <Route path={"/store_locations"} component={store_locations} />

          {/* this one should place always bottom */}
          <Route path={"/*"} exact component={Home} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
