import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import useApi from "../../hooks/useApi/useApi";
import { Json, ResponseAPI, Data } from "../../types/apiTypes";
import { CharacterCard } from "../../components/characterCard/characterCard"
import SearchCharacters from "../../components/searchCharacters/searchCharacters";
import { useDelay } from "../../hooks/useDelay";
import '../../styles/app.css';
import '../../styles/search.css';

export const CharactersList: React.FC = () => {

    const [characterslist, setCharacterslist] = useState<Data>();
    const [filter, setfilter] = useState<string>("");
    const { data, isloading, error } = useApi("/characters");

    const delaySearch = useDelay(filter);

    useEffect(() => {
        console.log("isloading;" + isloading)
        if (!isloading) {
            setCharacterslist(data);
        }
    }, [isloading]);

    useEffect(() => {
        console.log("delaySearch;" + delaySearch)
    }, [delaySearch]);

    return (
        <>
        <div>isloading:{isloading}</div>
            {isloading == false &&
                <section>
                    <SearchCharacters onChange={setfilter} />
                    <div className="characters__container">
                        {data?.results.map((character) =>
                            <CharacterCard character={character} favorites={[]} key={character.id}>
                                <CharacterCard.img />
                                <CharacterCard.Title>
                                    <CharacterCard.Name />
                                    <CharacterCard.FavButton />
                                </CharacterCard.Title>
                            </CharacterCard>
                        )}
                    </div>
                </section>
            }
        </>
    )

}