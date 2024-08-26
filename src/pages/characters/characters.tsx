import React, { useState, useEffect, useCallback } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import useApi from "../../hooks/useApi/useApi";
import { Json, ResponseAPI, Data } from "../../types/apiTypes";
import { CharacterCard } from "../../components/Cards/characterCard"
import SearchCharacters from "../../components/searchCharacters/searchCharacters";
import { useDelay } from "../../hooks/useDelay";
import '../../styles/app.css';
import '../../styles/search.css';
import useGlobalContext from "../../hooks/useGlobalContext/useGlobalContext";
import { GlovalContext, GlovalContextData } from "../../types/globalContextTypes"

export const Characters: React.FC = () => {
    const [filter, setfilter] = useState<string>("");
    const { data, isloading, error } = useApi("/characters");
    const { globalContext, setGlobalContext } = useGlobalContext();

    const delaySearch = useDelay(filter);

    const udpadeChacaters = useCallback(() => {
        const newglobalContext = { ...globalContext, ...{ characters: data } } as GlovalContextData
        setGlobalContext(newglobalContext);
    }, [data]);

    useEffect(() => {
        if (data !== undefined) {
            udpadeChacaters();
        }
    }, [data]);

    useEffect(() => {
    }, [delaySearch]);

    return (
        <>
            <div>isloading:{isloading}</div>
            {isloading === false &&
                <section>
                    <SearchCharacters onChange={setfilter} />
                    <div className="characters__container">
                        {globalContext?.characters.results.map((character) =>
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