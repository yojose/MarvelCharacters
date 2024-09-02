import React, { useContext } from 'react'
import '../../styles/header.css'
import logo from '../../asset/img/Marvel logo.svg'
import { FavoritesContext } from '../Contexts/favoritesContect'
import { Link } from 'react-router-dom'

export const Header: React.FC = () => {
    const { favorites } = useContext(FavoritesContext)
    return (
        <header className="header text--primary-color">
            <div className="header__container">
                <div className="header__marvel-logo">
                    <Link
                        to={`/characters`}
                        key={1}
                        style={{ textDecoration: 'none' }}
                    >
                        <img loading="lazy" src={logo} alt="Logo Marvel" />
                    </Link>
                </div>
                <div className="header__fav">
                    <Link
                        to={
                            favorites?.length > 0
                                ? `/characters/favoritesFilter`
                                : `/characters`
                        }
                        key={1}
                        style={{ textDecoration: 'none' }}
                    >
                        <div className="icon-fav"></div>
                        <div className="header__number-fav">
                            {favorites?.length}
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    )
}
