import { PropsWithChildren } from 'react';
import {ComicsResult} from "./apiTypes";

export interface ComicCardProps extends PropsWithChildren {
    comic: ComicsResult;
};

export interface UseComicCardContext {
    comic: ComicsResult;
};

export interface ComicCardImg {
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