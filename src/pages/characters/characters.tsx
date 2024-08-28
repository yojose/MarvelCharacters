import React, { useState, useEffect, useRef, createContext } from "react";
import useApi from "../../hooks/useApi/useApi";
import { Data, CharacterResult } from "../../types/apiTypes";
import { CharacterCard } from "../../components/Cards/characterCard"
import SearchCharacters from "../../components/Search/searchCharacters";
import { useDelay } from "../../hooks/useDelay";
import '../../styles/app.css';
import '../../styles/search.css';
import { optionAxios } from "../../types/charactersTypes";
import useFavoritesFilter from "../../hooks/filters/useFavoritesFilter";
import useCharactersContext from "../../hooks/useContexts/useCharactersContext"

export const CharactersContext = createContext<Data<CharacterResult[]> | undefined>(undefined);

export const Characters: React.FC = () => {
    const [filter, setfilter] = useState<string>("");
    const [path, setpath] = useState<string>("/characters");
    const maxcharacters = 5;
    const delaySearch = useDelay(filter);
    const [optionAxios, setOptionAxios] = useState<optionAxios>({
        method: 'get',
        params: {
            limit: maxcharacters,
            offset: 0,
        }
    });

    const { data, isloading, error } = useApi<CharacterResult[]>(path, optionAxios);
    const { favoriteDataFilter, favoritesDataFiltered, isFavoritesFiltered } = useFavoritesFilter(data);

    /*useEffect(() => {
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
    }, [data]);*/

    /*useEffect(()=>{
        if (first.current) {
            first.current = false;
            return;
          }
        //fetchRequest();
    },[])*/

    useEffect(() => {
        if (data !== undefined) favoriteDataFilter()
    }, [data]);

    console.debug("render Characters")

    return (
        <>
            <CharactersContext.Provider value={isFavoritesFiltered?favoritesDataFiltered:data}>
                <div>isloading:{isloading}</div>
                {(isloading === false && data !== undefined) &&
                    <section className="section">
                        <SearchCharacters onChange={setfilter} />
                        <div className="characters__container">
                            <CharactersCards/>
                        </div>
                    </section>
                }
            </CharactersContext.Provider>
        </>
    )
}

const CharactersCards = () => {
    const CharactersContext = useCharactersContext();
    return (
        <>
            {CharactersContext?.map((character) =>
                <CharacterCard character={character} favorites={[]} key={character.id}>
                    <CharacterCard.img />
                    <CharacterCard.Title>
                        <CharacterCard.Name />
                        <CharacterCard.FavButton />
                    </CharacterCard.Title>
                </CharacterCard>)}
        </>
    )
}