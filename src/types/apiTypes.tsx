export type Json = boolean | number | string | null | { [key: string]: Json } | Array<Json>;


export type Favorites=string[] | undefined;

/**types interfaces generate using quicktype. https://app.quicktype.io/ */

export interface ResponseAPI {
    code:            number;
    status:          string;
    copyright:       string;
    attributionText: string;
    attributionHTML: string;
    etag:            string;
    data:            Data;
}

export interface Data {
    offset:  number;
    limit:   number;
    total:   number;
    count:   number;
    results: CharacterResult[];
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

export type Type="cover" |"interiorStory";

export interface Thumbnail {
    path:      string;
    extension: string;
}

export interface URL {
    type: string;
    url:  string;
}
