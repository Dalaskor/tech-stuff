import React from 'react';
import "./App.scss";
import {Header} from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/MainPage";
import {Footer} from "./components/Footer/Footer";

export const App = () => {
    return (
        <div className={"wrapper"}>
            <Header/>
            <main className={"main"}>
                <Routes>
                    <Route path={"/tech-stuff/"} element={<MainPage/>}/>
                </Routes>
            </main>
            <Footer/>
        </div>
    )
}