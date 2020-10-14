import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import Wishlist from "./pages/wishlist/wishlist";
import Faq from "./pages/footer/faq/Faq";
import TermsAndConditions from "./pages/footer/termsAndConditions/TermsAndConditions";
import Store_locations from "./pages/store_locations/store_locations";
import ProductVariety from "./pages/productVariety/productVariety";
import Cart from "./pages/cart/Cart";
import ContactUs from "./pages/contactUs/contactUs";
import Grocery from "./pages/categories/grocery/Grocery";
import Login from "./pages/login/Login";
import Payment from "./pages/payment options/Payment";
import Baby from "./pages/babyNeeds/Baby";
import Signup from "./pages/signup/Signup";
import { Switch, Route, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AppContexts } from "./contexts/AppContextsProvider";

function App() {

    let [loaded, setload] = useState(false);
    let [login, setLogin] = useState(false);
    let [wishlistitems, setwishlistitems] = useState(
        [
            { id: 1, name: "z", price: 1030, qty: 6, isAddedToCart: false },
            { id: 2, name: "z", price: 2050, qty: 5, isAddedToCart: false }
        ]);

    let [cartitems, setcartitems] = useState(
        [
            { id: 1, name: "z", price: 1030, qty: 6, isAddedToCart: true },
            { id: 2, name: "z", price: 2050, qty: 5, isAddedToCart: true }
        ]);
    const location = useLocation();



    useEffect(() => {
        const currentPath = location.pathname;


        window.scrollTo({ top: 0, behavior: 'smooth' });

    }, [location]);

    const LoginSet = (type) => {
        setLogin((login = type));
    };





    let [nName, setLoc] = useState()
    let [nLink, setLink] = useState()

    const setLocbar = (name, nlink) => {

        setLoc(name);
        setLink(nlink)

    }




    return (<
        div className="App" >
        <AppContexts.Provider value={{ wishlistitems, setwishlistitems, cartitems, setcartitems }}>
            <Header isLogged={login} logSet={LoginSet} home={'Home'} name={nName} link={nLink} />
            <Switch >

                <Route path={"/login"} exact component={Login} />


                // new router change

                <Route exact path="/baby" render={() => {
                    setLocbar('Baby needs', '/baby');
                    return <Baby />;
                }} />

                <Route exact path="/faq" render={() => {
                    setLocbar('F.A.Q', '/faq');
                    return <Faq />;
                }} />

                <Route exact path="/terms-and-conditions" render={() => {
                    setLocbar('Terms and conditions', '/terms-and-conditions');
                    return <TermsAndConditions />;
                }} />

                <Route exact path="/wishlist" render={() => {
                    setLocbar('Wishlist', '/wishlist');
                    return <Wishlist />;
                }} />

                <Route exact path="/cart" render={() => {
                    setLocbar('Cart', '/cart');
                    return <Cart />;
                }} />

                <Route exact path="/categories-grocery" render={() => {
                    setLocbar('Grocery', '/categories-grocery');
                    return <Grocery />;
                }} />
            
                <Route exact path="/store_locations" render={() => {
                    setLocbar('Store Locations', '/store_locations');
                    return <Store_locations />;
                }} />

                <Route exact path="/contact-us" render={() => {
                    setLocbar('Contact Us', '/contact-us');
                    return <ContactUs />;
                }} />

                <Route exact path="/payment" render={() => {
                    setLocbar('Payments', '/payment');
                    return <Payment />;
                }} />

                <Route exact path="/productVariety" render={() => {
                    setLocbar('product Variety', '/productVariety');
                    return <ProductVariety />;
                }} />


                {/* this one should place always bottom */}
                <Route path={"/*"} exact component={Home} />

            </Switch>
            <Footer />

        </AppContexts.Provider>
    </div>
    );
}

export default App;
