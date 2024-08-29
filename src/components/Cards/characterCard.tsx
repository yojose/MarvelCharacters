import React, { createContext, useContext, useMemo } from "react";
import { CharacterCardProps, UseCharacterCardContext } from "../../types/charactersTypes";
import { PropsWithChildren } from 'react';
import { Link} from "react-router-dom";
import useCharacterCardContext from "../../hooks/useCharacters/useCharacterCardContext"
import '../../styles/characters.css';
import {FavoritesContext} from "../../components/Contexts/favoritesContect";
import useFavoritesContext from "../../hooks/useContexts/useFavoritesContext";
import { FavoriteIcon } from "../../components/favoritesIcon/favoritesIcon"

const CharacterCardContext = createContext<UseCharacterCardContext | undefined>(undefined);

const CharacterCard= ({ children, character }: CharacterCardProps) =>{
    return (
        <CharacterCardContext.Provider value={{ character }}>
            <article className="character-card">
                <div className="character-card__container">
                    {children}
                </div>
            </article>
        </CharacterCardContext.Provider>
    )

}

export {CharacterCard, CharacterCardContext};



CharacterCard.Title = function title({ children }: PropsWithChildren) {
    const { character } = useCharacterCardContext();
    return (
        <Link to={`../character/${character.id}`} key={1} style={{ textDecoration: "none" }}>
            <div className="character-card__info">
                {children}
            </div>
        </Link>
    )
};

CharacterCard.img = () => {
    const { character } = useCharacterCardContext();
    return (
        <div className="character-card_img">
            <img loading="lazy" src={`${character.thumbnail.path}/portrait_fantastic.${character.thumbnail.extension}`} alt={`${character.name} image}`} />
        </div>
    )
}

CharacterCard.Name = function name() {
    const { character } = useCharacterCardContext();

    return (
        <div className="character-card__name font-family__primary-color">
            {character.name}
        </div>
    )
};

CharacterCard.FavButton = function facButton() {
    const { character} = useCharacterCardContext();
    const {favorites}=useContext(FavoritesContext);
    const { changeFavoritos, isOnFavoritos } = useFavoritesContext();
    const id=character.id;

    const isFavorito = useMemo(() => {
        if (id !== undefined) {
            return isOnFavoritos(id);
        } else {
            return false;
        }
    },[id, favorites]);

    const HandleClick=(e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
        if(id !== undefined) changeFavoritos(id);
        e.preventDefault();
    }

    return (
        <div className="character-car__fav" onClick={HandleClick}>
            <FavoriteIcon isFavorite={isFavorito} />
        </div>
    )
};