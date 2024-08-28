import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import useApi from "../../hooks/useApi/useApi";
import { optionAxios } from "../../types/comicTypes"
import '../../styles/comic.css';
import { ComicCard } from "../../components/Cards/comicCard";
import { ComicsResult } from "../../types/apiTypes";

interface comicProps{
    id:string | undefined;
}

export const Comic: React.FC<comicProps> = ({id}) => {
    const path = `/${id}/comic`;
    const maxcharacters = 50;
    const [optionAxios, setOptionAxios] = useState<optionAxios>({
        method: 'get',
        params: {
            limit: maxcharacters,
            offset: 0,
        }
    });
    const { data, isloading, error } = useApi<ComicsResult[]>(path, optionAxios);

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <>
            {(isloading === false) &&
                <section className="comics">
                <div className="comics__container text--secondary-color">
                    <h2>
                        COMICS
                    </h2>
                    <div className="comics__catalog">
                        <div className="comics__scroll">
                        {data?.results.map((comic) =>
                            <ComicCard comic={comic} key={comic.id}>
                                <ComicCard.img />
                                <ComicCard.Title>
                                    <ComicCard.Name />
                                    <ComicCard.Year />
                                </ComicCard.Title>
                            </ComicCard>
                        )}
                        </div>
                    </div>
                </div>
            </section>
            }
        </>
    )

}