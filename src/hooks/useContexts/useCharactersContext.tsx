import {useContext } from "react";
import {CharactersContext} from "../../pages/characters/characters";

export default function useCharactersContext() {
    const context = useContext(CharactersContext);
    if (!context) {
        throw new Error('CharactersContext must characters');
    }
    return context;
}