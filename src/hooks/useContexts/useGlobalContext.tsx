import {useContext } from "react";
import {GlobalContext} from "../../components/Contexts/globalContect";

export default function useGlobalContext() {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error('GlobalContext must be use on App');
    }
    return context;
}