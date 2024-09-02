import React, { createContext } from "react";
import { ComicCardProps, UseComicCardContext } from "../../types/comicTypes";
import { PropsWithChildren } from 'react';
import { Link } from "react-router-dom";
import useComicCardContext from "../../hooks/useContexts/useComicCardContext"
import '../../styles/characters.css';

const ComicCardContext = createContext<UseComicCardContext | undefined>(undefined);

const ComicCard = ({ children, comic }: ComicCardProps) => {
    return (
        <>{(comic !== undefined) &&
            <ComicCardContext.Provider value={{ comic }}>
                <article className="comic-card" data-testid="comic-card">
                    <div className="comic-card__container">
                        {children}
                    </div>
                </article>
            </ComicCardContext.Provider>
        }
        </>
    )

}
export { ComicCard, ComicCardContext };


ComicCard.Link = function LinkToComic({ children }: PropsWithChildren) {
    const { comic } = useComicCardContext();
    return (
        <Link to={`../character/${comic.id}`} key={1} style={{ textDecoration: "none" }}>
            {children}
        </Link>
    )
};

ComicCard.img = function Imagen() {
    const { comic } = useComicCardContext();
    return (
        <div className="comic-card__img">
            <img loading="lazy" src={`${comic.thumbnail.path}/portrait_fantastic.${comic.thumbnail.extension}`} alt={`${comic.title} image}`} />
        </div>
    )
}

ComicCard.Title = function Title({ children }: PropsWithChildren) {
    return (
        <div className="comic-card__information text--secondary-color">
            {children}
        </div>
    )
};

ComicCard.Name = function ComicName() {
    const { comic } = useComicCardContext();

    return (
        <div className="comic-card__name --text-secondary-color roboto-condensed--500">
            {comic.title}
        </div>
    )
};

ComicCard.Year = function ComicYear() {
    const { comic } = useComicCardContext();
    return (
        <>{comic !== undefined &&
            <div className="comic-card__year roboto-condensed--600">
                {(comic.dates!==undefined) && comic.dates?.map((d) => {
                    if (d.type == "onsaleDate") {
                        const date1 = new Date(d.date);
                        return date1.getFullYear()
                    }
                })}
            </div>
        }</>
    )
};