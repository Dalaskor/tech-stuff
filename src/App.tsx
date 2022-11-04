import React from 'react';
import "./App.scss";
import {Header} from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/MainPage";
import {Footer} from "./components/Footer/Footer";
import {DeliveryPage} from "./pages/DeliveryPage";
import {PaymentPage} from "./pages/PaymentPage";
import {ContactsSection} from "./components/ContactsSection/ContactsSection";
import {ProductPage} from "./pages/ProductPage";

export const App = () => {
    return (
        <div className={"wrapper"}>
            <Header/>
            <main className={"main"}>
                <Routes>
                    <Route path={"/tech-stuff/*"} element={<MainPage/>}/>
                    <Route path={"/tech-stuff/delivery"} element={<DeliveryPage/>}/>
                    <Route path={"/tech-stuff/payment"} element={<PaymentPage/>}/>
                    <Route path={"/tech-stuff/contacts"} element={<ContactsSection/>}/>
                    <Route path={"/tech-stuff/product/:productId"} element={<ProductPage/>}/>
                </Routes>
            </main>
            <Footer/>
        </div>
    )
}