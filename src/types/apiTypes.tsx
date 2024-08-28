export type Json = boolean | number | string | null | { [key: string]: Json } | Array<Json>;


export type Favorites=string[] | undefined;

/**types interfaces generate using quicktype. https://app.quicktype.io/ */

/**characters types*/

export interface ResponseAPI<T> {
    code:            number;
    status:          string;
    copyright:       string;
    attributionText: string;
    attributionHTML: string;
    etag:            string;
    data:            Data<T>;
}

export interface Data<T>{
    offset:  number;
    limit:   number;
    total:   number;
    count:   number;
    results: T;
}

export interface CharacterResult {
    id:          number;
    name:        string;
    description: string;
    modified:    string;
    thumbnail:   Thumbnail;
    resourceURI: string;
    comics:      Comics;
    series:      Comics;
    stories:     Stories;
    events:      Comics;
    urls:        URL[];
}

export interface Comics {
    available:     number;
    collectionURI: string;
    items:         ComicsItem[];
    returned:      number;
}

export interface ComicsItem {
    resourceURI: string;
    name:        string;
}

export interface Stories {
    available:     number;
    collectionURI: string;
    items:         StoriesItem[];
    returned:      number;
}

export interface StoriesItem {
    resourceURI: string;
    name:        string;
    type:        Type;
}

export type Type=string;

export interface Thumbnail {
    path:      string;
    extension: string;
}

export interface URL {
    type: string;
    url:  string;
}

/**comic types*/

export interface ComicsResult {
    id:                 number;
    digitalId:          number;
    title:              string;
    issueNumber:        number;
    variantDescription: string;
    description:        string | null;
    modified:           string;
    isbn:               string;
    upc:                string;
    diamondCode:        string;
    ean:                string;
    issn:               string;
    format:             string;
    pageCount:          number;
    textObjects:        TextObject[];
    resourceURI:        string;
    urls:               URL[];
    series:             Series;
    variants:           Series[];
    collections:        Series[];
    collectedIssues:    Series[];
    dates:              DateElement[];
    prices:             Price[];
    thumbnail:          Thumbnail;
    images:             Thumbnail[];
    creators:           Characters;
    characters:         Characters;
    stories:            Stories;
    events:             Events;
}

export interface Characters {
    available:     number;
    returned:      number;
    collectionURI: string;
    items:         CharactersItem[];
}

export interface CharactersItem {
    resourceURI: string;
    name:        string;
    role?:        string;
}

export interface Series {
    resourceURI: string;
    name:        string;
}

export interface DateElement {
    type: string;
    date: string;
}

export interface Events {
    available:     number;
    returned:      number;
    collectionURI: string;
    items:         Series[];
}

export interface Thumbnail {
    path:      string;
    extension: string;
}

export interface Price {
    type:  string;
    price: number;
}

export interface Stories{
    available:     number;
    returned:      number;
    collectionURI: string;
    items:         StoriesItem[];
}

export interface StoriesItem {
    resourceURI: string;
    name:        string;
    type:        string;
}

export interface TextObject {
    type:     string;
    language: string;
    text:     string;
}

export interface URL {
    type: string;
    url:  string;
}

