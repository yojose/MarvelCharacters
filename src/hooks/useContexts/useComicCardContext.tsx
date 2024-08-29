import {useContext } from "react";
import {ComicCardContext} from "../../components/Cards/comicCard";

export default function useComicCardContext() {
    const context = useContext(ComicCardContext);
    if (!context) {
        throw new Error('ComicCardContext must use on ComicCard component');
    }
    return context;
}