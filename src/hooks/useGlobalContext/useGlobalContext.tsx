import {useContext } from "react";
import {GlobalContext} from "../../app";

export default function useCharacterCardContext() {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error('GlobalContext not defined');
    }
    return context;
}