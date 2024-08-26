import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import useApi from "../../hooks/useApi/useApi";
import { Json, ResponseAPI, Data } from "../../types/apiTypes";
import { CharacterCard } from "../../components/characterCard/characterCard"
import '../../styles/app.css';
import '../../styles/search.css';

export const CharactersList: React.FC = () => {

    const [characterslist, setCharacterslist] = useState<Data>();
    const { data, isloading, error } = useApi("/characters");

    useEffect(() => {
        console.log("isloading;" + isloading)
        if (!isloading) {
            setCharacterslist(data);
        }
    }, [isloading]);

    return (
        <>
            {isloading == false &&
                <div>
                    <section className="main-section">

                        <search className="search">
                            <div className="search__container">
                                <form action="#" method="get" className="search__form">
                                    <div className="icon__search"></div>
                                    <label className="search__character-label">
                                        <input
                                            className="search__input"
                                            type="text"
                                            name="search_character"
                                            id="search_character"
                                            placeholder="SEARCH A CHARACTER"
                                            maxLength={200} />
                                    </label>
                                </form>
                                <div className="search__result">50 RESULT</div>
                            </div>
                        </search>

                        <div className="characters__container">
                            {data?.results.map((character) =>
                                <CharacterCard character={character} favs={[]} key={character.id}>
                                    <CharacterCard.img />
                                    <CharacterCard.Title>
                                        <CharacterCard.Name />
                                        <CharacterCard.FavButton />
                                    </CharacterCard.Title>
                                </CharacterCard>
                            )}
                        </div>
                    </section>
                </div>
            }
        </>
    )

}