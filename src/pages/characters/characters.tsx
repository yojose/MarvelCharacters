import React, { useState, useEffect, useCallback,createContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import useApi from "../../hooks/useApi/useApi";
import { Json, ResponseAPI, Data, CharacterResult } from "../../types/apiTypes";
import { CharacterCard } from "../../components/Cards/characterCard"
import SearchCharacters from "../../components/Search/searchCharacters";
import { useDelay } from "../../hooks/useDelay";
import '../../styles/app.css';
import '../../styles/search.css';
import useGlobalContext from "../../hooks/useGlobalContext/useGlobalContext";
import { GlovalContext, GlovalContextData } from "../../types/globalContextTypes"
import {optionAxios} from "../../types/charactersTypes"


export const CharactersContext = createContext<Data<CharacterResult[]> | undefined>(undefined);

export const Characters: React.FC = () => {
    const [filter, setfilter] = useState<string>("");
    const [path, setpath] = useState<string>("");
    const maxcharacters=50;
    
    const { globalContext, setGlobalContext } = useGlobalContext();
    const delaySearch = useDelay(filter);
    const [optionAxios, setOptionAxios] = useState<optionAxios>({
        method: 'get',
        params: {
            limit: maxcharacters,
            offset:0,
        }
    });

    const { data, isloading, error } = useApi<CharacterResult[]>(path,optionAxios);

    useEffect(() => {
        const udpadeCharacters = () => {
            let newglobalContext:GlovalContextData;
            if(globalContext!==undefined){
                newglobalContext={ ...globalContext, ...{ characters: {
                    results:data?.results} as Data<CharacterResult[]> } };
            }else{
                newglobalContext={...{characters:{} as Data<CharacterResult>,favorites: []},...{ characters: {
                    results:data?.results} as Data<CharacterResult[]> }}
            }
            setGlobalContext(newglobalContext);
        }

        if (data !== undefined) {
            udpadeCharacters();
        }
    }, [data]);

    return (
        <>
        <CharactersContext.Provider value={data}>
            <div>isloading:{isloading}</div>
            {(isloading === false && data!==undefined) &&
                <section className="section">
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
            </CharactersContext.Provider>
        </>
    )
}