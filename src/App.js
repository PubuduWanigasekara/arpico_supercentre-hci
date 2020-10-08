import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import Wishlist from "./pages/wishlist/wishlist";
import Faq from "./pages/footer/faq/Faq";
import TermsAndConditions from "./pages/footer/termsAndConditions/TermsAndConditions";
import store_locations from "./pages/store_locations/store_locations";
import productVariety from "./pages/productVariety/productVariety";
import Cart from "./pages/cart/Cart";
import contactUs from "./pages/contactUs/contactUs";
import Grocery from "./pages/categories/grocery/Grocery";
import Login from "./pages/login/Login";
import Payment from './pages/payment options/Payment'
import Baby from "./pages/babyNeeds/Baby";
import { Switch, Route, Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

function App() {
    let [loaded, setload] = useState(false);

    let [login, setLogin] = useState(false);

    const location = useLocation();



    useEffect(() => {
        const currentPath = location.pathname;

        window.scrollTo(0, 0);

    }, [location]);

    const LoginSet = (type) => {
        setLogin((login = type));
    };



    return (<
        div className="App" >
       
            <Header isLogged={login} logSet={LoginSet} />
            <Switch >
                <Route path={"/login"} exact component={Login}/>
                 <
                    Route path={"/"}
                    exact component={Home}
                /> <
                    Route path={"/faq"}
                    component={Faq}
                /> <
                    Route path={"/terms-and-conditions"}
                    component={TermsAndConditions}
                /> <
                    Route path={"/wishlist"}
                    component={Wishlist}
                /> <
                    Route path={"/cart"}
                    component={Cart}
                /> <
                    Route path={"/categories-grocery"}
                    component={Grocery}
                /> <
                    Route path={"/baby"}
                    component={Baby}
                /> <
                    Route path={"/store_locations"}
                    component={store_locations}
                /> <
                    Route path={"/contact-us"}
                    component={contactUs}
                /> <
                    Route path={"/payment"}
                    component={Payment}
                /> <
                    Route path={"/productVariety"}
                    component={productVariety}
                />

                { /* this one should place always bottom */} <
                    Route path={"/*"}
                    exact component={Home}
                /> </Switch>
            <Footer />
        </div>
    );
}

export default App;