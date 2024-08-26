import {useContext } from "react";
import {CharacterCardContext} from "../../components/Cards/characterCard";

export default function useCharacterCardContext() {
    const context = useContext(CharacterCardContext);
    if (!context) {
        throw new Error('CharacterCardContext use on CharacterCard only');
    }
    return context;
}