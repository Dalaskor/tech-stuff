import React from 'react';
import "./App.scss";
import {Header} from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/MainPage";

export const App = () => {
    return (
        <div className={"wrapper"}>
            <Header/>
            <main>
                <Routes>
                    <Route path={"/tech-stuff/"} element={<MainPage/>}/>
                </Routes>
            </main>
            <footer>FOOTER</footer>
        </div>
    )
}