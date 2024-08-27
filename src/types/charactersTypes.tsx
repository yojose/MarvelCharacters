import { PropsWithChildren } from 'react';
import {CharacterResult, Favorites} from "./apiTypes";

export interface CharacterCardProps extends PropsWithChildren {
    character: CharacterResult;
    favorites:Favorites;
};

export interface UseCharacterCardContext {
    character: CharacterResult;
    favorites:Favorites;
};

export interface CharacterCardImg {
    src:string;
};

export interface optionAxios{
    method: string,
    params: {
        ts?:string,
        limit?: number,
        offset?:number,
        apikey?:string,
        hash?:string,
        nameStartsWith?:string
    }
}