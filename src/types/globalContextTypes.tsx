import {Data,Favorites} from "./apiTypes"


export interface GlovalContext{
    globalContext:GlovalContextData | undefined;
    setGlobalContext:React.Dispatch<React.SetStateAction<GlovalContextData | undefined>>;
}

export interface GlovalContextData{
    characters:Data | undefined;
    favorites:Favorites;
}



