import {Data,Favorites, CharacterResult} from "./apiTypes"


export interface GlovalContext{
    globalContext:GlovalContextData | undefined;
    setGlobalContext:React.Dispatch<React.SetStateAction<GlovalContextData | undefined>>;
}

export interface GlovalContextData{
    characters:Data<CharacterResult[]> | undefined;
    favorites:Favorites;
}



