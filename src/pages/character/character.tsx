import React, { useState, useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import useApi from "../../hooks/useApi/useApi";
import { optionAxios } from "../../types/charactersTypes"
import { CharacterResult } from "../../types/apiTypes";
import '../../styles/character.css';
import Comic from "../../components/Comic/comicCataloguel";
import { FavoritesContext } from "../../components/Contexts/favoritesContect"
import useFavoritesContext from "../../hooks/useContexts/useFavoritesContext";
import { FavoriteIcon } from "../../components/favoritesIcon/favoritesIcon";
import {Loader} from "../../components/loader/loader"


export const Character: React.FC = () => {
    const { id } = useParams();
    const path = `/characters/${id}`;
    const maxcharacters = 50;
    const [optionAxios, setOptionAxios] = useState<optionAxios>({
        method: 'get',
        params: {
            limit: maxcharacters,
            offset: 0,
        }
    });
    const { data, isloading } = useApi<CharacterResult[]>(path, optionAxios);

    return (
        <>
            {isloading === true && <Loader/>}
            {(isloading === false && id !== undefined && data !== undefined) &&
                <section className="section--no-pading">
                    <article className="character__container">
                        <div className="character__header">
                            <div className="character__infromation_container">
                                <div className="character__img" data-testid="character__img">
                                    <img loading="lazy" src={`${data?.results[0].thumbnail.path}/portrait_fantastic.${data?.results[0].thumbnail.extension}`} alt={`${data?.results[0].name} image}`}  />
                                </div>
                                <div className="character__information">
                                    <div className="character__name-container">
                                        <h2 className="character__name text--primary-color roboto-condensed--700">{data?.results[0].name}</h2>
                                        <FavButton id={parseInt(id)} />
                                    </div>
                                    <p className="character__description roboto-condensed--700">{data?.results[0].description}</p>
                                </div>
                            </div>
                        </div>
                    </article>
                    {id !== undefined && <Comic id={id} />}
                </section>
            }

        </>
    )

}

const FavButton: React.FC<{ id: number }> = ({ id }) => {
    const { favorites } = useContext(FavoritesContext);
    const { changeFavoritos, isOnFavoritos } = useFavoritesContext();

    const isFavorito = useMemo(() => {
        if (id !== undefined) {
            return isOnFavoritos(id);
        } else {
            return false;
        }
    }, [id, favorites]);

    const HandleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
        if (id !== undefined) changeFavoritos(id);
        e.preventDefault();
    }

    return (
        <div className="character__name-favs" onClick={HandleClick}>
            <FavoriteIcon isFavorite={isFavorito} />
        </div>
    )
};