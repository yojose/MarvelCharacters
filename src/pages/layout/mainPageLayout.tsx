import React from "react"
import {Outlet } from "react-router-dom";
import "../../styles/header.css"
import logo from '../../asset/img/Marvel logo.svg';

export const MainPageLayout: React.FC = () => {

    return (
        <div id="root" className="app font-family">
            <header className="header text--primary-color">
                <div className="header__container">
                    <div className="header__marvel-logo">
                        <img src={logo} alt="Logo Marvel" />
                    </div>
                    <div className="header__fav">
                        <div className="icon-fav"></div>
                        <div className="header__number-fav">300</div>
                    </div>
                </div>
            </header>

            <main className="main">
            <Outlet />
            </main>
        </div>
    )

}