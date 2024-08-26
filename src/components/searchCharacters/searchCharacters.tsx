import React, { useState, useEffect } from "react";
import { CharacterCardProps, UseCharacterCardContext } from "../../types/charactersTypes";
import { PropsWithChildren } from 'react';
import { Link } from "react-router-dom";
import useCharacterCardContext from "../../hooks/useGlobalContext/useGlobalContext"
import '../../styles/search.css';
import {seachCharacters} from "../../types/searchCharactersTypes"

const SearchCharacters = ({onChange}:seachCharacters) => {
    return (
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
                            maxLength={200}
                            onChange={(e) => onChange(e.target.value)} />
                    </label>
                </form>
                <SearchCharactersResult />
            </div>
        </search>

    )
}

const SearchCharactersResult = () => {
    const { globalContext } = useCharacterCardContext();
    return (<div className="search__result">{globalContext?.characters.count} RESULT</div>);
}
export default SearchCharacters;