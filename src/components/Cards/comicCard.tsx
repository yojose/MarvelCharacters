import React, { createContext } from "react";
import { ComicCardProps, UseComicCardContext } from "../../types/comicTypes";
import { PropsWithChildren } from 'react';
import { Link } from "react-router-dom";
import useComicCardContext from "../../hooks/useComicCardContext"
import '../../styles/characters.css';

const ComicCardContext = createContext<UseComicCardContext | undefined>(undefined);

const ComicCard = ({ children, comic}: ComicCardProps) => {
    return (
        <ComicCardContext.Provider value={{ comic }}>
            <article className="comic">
                <div className="comic__container">
                    {children}
                </div>
            </article>
        </ComicCardContext.Provider>
    )

}
export { ComicCard, ComicCardContext };


ComicCard.Link = function link({ children }: PropsWithChildren) {
    const { comic } = useComicCardContext();
    return (
        <Link to={`../character/${comic.id}`} key={1} style={{ textDecoration: "none" }}>
            {children}
        </Link>
    )
};

ComicCard.img = () => {
    const { comic } = useComicCardContext();
    return (
        <div className="comic__img">
            <img loading="lazy" src={`${comic.thumbnail.path}/portrait_fantastic.${comic.thumbnail.extension}`} alt={`${comic.title} image}`} />
        </div>
    )
}

ComicCard.Title = function title({ children }: PropsWithChildren) {
    return (
        <div className="comic__information text--secondary-color">
            {children}
        </div>
    )
};

ComicCard.Name = function name() {
    const { comic } = useComicCardContext();

    return (
        <div className="comic__name --text-secondary-color roboto-condensed--500">
            {comic.title}
        </div>
    )
};

ComicCard.Year = function year() {
    const { comic } = useComicCardContext();
    return (
        <div className="comic__year roboto-condensed--600">
            {comic.dates.map((d)=> {if(d.type=="onsaleDate"){
                const date1 = new Date(d.date);
                return date1.getFullYear()}})}
        </div>
    )
};