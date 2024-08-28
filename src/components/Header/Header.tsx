import React ,{useContext}from "react"
import "../../styles/header.css"
import logo from '../../asset/img/Marvel logo.svg';
import { FavoritesContext } from "../Contexts/favoritesContect"

export const Header: React.FC = () => {
    const {favorites}=useContext(FavoritesContext);
    return (
        <header className="header text--primary-color">
            <div className="header__container">
                <div className="header__marvel-logo">
                    <img loading="lazy" src={logo} alt="Logo Marvel" />
                </div>
                <div className="header__fav">
                    <div className="icon-fav"></div>
                    <div className="header__number-fav">{favorites?.length}</div>
                </div>
            </div>
        </header>
    )

}