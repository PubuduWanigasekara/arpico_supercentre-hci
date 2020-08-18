import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/home/Home";
import Faq from "./pages/footer/faq/Faq";
import TermsAndConditions from "./pages/footer/termsAndConditions/TermsAndConditions";
import Cart from "./pages/cart/Cart";
import Grocery from "./pages/categories/grocery/Grocery";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  let [loaded, setload] = useState(false);

  useEffect(() => {});

  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path={"/"} exact component={Home} />
          <Route path={"/faq"} component={Faq} />
          <Route
            path={"/terms-and-conditions"}
            component={TermsAndConditions}
          />
          <Route path={"/cart"} component={Cart} />
          <Route path={"/categories-grocery"} component={Grocery} />
          <Route path={"/*"} exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
