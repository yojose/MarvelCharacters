import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import useApi from "../../hooks/useApi/useApi";
import { optionAxios } from "../../types/charactersTypes"
import '../../styles/character.css';
import '../../styles/comic.css';


export const Character: React.FC = () => {
    const { id } = useParams();
    const path = `/charactaers/${id}`;
    const maxcharacters = 50;
    const [optionAxios, setOptionAxios] = useState<optionAxios>({
        method: 'get',
        params: {
            limit: maxcharacters,
            offset: 0,
        }
    });
    const { data, isloading, error } = useApi(path, optionAxios);

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <>
            {(isloading === false) &&
                <section className="section--no-pading">
                    <article className="character__container">
                        <div className="character__header">
                            <div className="character__infromation_container">
                                <div className="character__img">
                                    <img loading="lazy" src={`${data?.results[0].thumbnail.path}/portrait_fantastic.${data?.results[0].thumbnail.extension}`} alt={`${data?.results[0].name} image}`} />
                                </div>
                                <div className="character__information">
                                    <div className="character__name-container">
                                        <h2 className="character__name text--primary-color roboto-condensed--700">{data?.results[0].name}</h2>
                                        <div className="character__name-favs">
                                            <div className="icon-fav">{id}</div>
                                        </div>
                                    </div>
                                    <p className="character__description roboto-condensed--700">{data?.results[0].description}</p>
                                </div>
                            </div>
                        </div>
                    </article>
                    <section className="comics">
                        <div className="comics__container text--secondary-color">
                            <h2>
                                COMICS
                            </h2>
                            <div className="comics__catalog">
                                <div className="comics__scroll">

                                    <article className="comic">
                                        <div className="comic__img">
                                            <img loading="lazy" src={`${data?.results[0].thumbnail.path}/portrait_fantastic.${data?.results[0].thumbnail.extension}`} alt={`${data?.results[0].name} image}`} />
                                        </div>
                                        <div className="comic__information text--secondary-color">
                                            <h2 className="comic__name --text-secondary-color roboto-condensed--500">comic name</h2>
                                            <div className="comic__year roboto-condensed--600">1980</div>
                                        </div>
                                    </article>

                                    <article className="comic">
                                        <div className="comic__img">
                                            <img loading="lazy" src={`${data?.results[0].thumbnail.path}/portrait_fantastic.${data?.results[0].thumbnail.extension}`} alt={`${data?.results[0].name} image}`} />
                                        </div>
                                        <div className="comic__information">
                                            <h2 className="comic__name text--size text--primary-color">comic name</h2>
                                            <div className="comic__year">1980</div>
                                        </div>
                                    </article>

                                    <article className="comic">
                                        <div className="comic__img">
                                            <img loading="lazy" src={`${data?.results[0].thumbnail.path}/portrait_fantastic.${data?.results[0].thumbnail.extension}`} alt={`${data?.results[0].name} image}`} />
                                        </div>
                                        <div className="comic__information">
                                            <h2 className="comic__name text--size text--primary-color">comic name</h2>
                                            <div className="comic__year">1980</div>
                                        </div>
                                    </article>

                                    <article className="comic">
                                        <div className="comic__img">
                                            <img loading="lazy" src={`${data?.results[0].thumbnail.path}/portrait_fantastic.${data?.results[0].thumbnail.extension}`} alt={`${data?.results[0].name} image}`} />
                                        </div>
                                        <div className="comic__information">
                                            <h2 className="comic__name text--size text--primary-color">comic name</h2>
                                            <div className="comic__year">1980</div>
                                        </div>
                                    </article>

                                    <article className="comic">
                                        <div className="comic__img">
                                            <img loading="lazy" src={`${data?.results[0].thumbnail.path}/portrait_fantastic.${data?.results[0].thumbnail.extension}`} alt={`${data?.results[0].name} image}`} />
                                        </div>
                                        <div className="comic__information">
                                            <h2 className="comic__name text--size text--primary-color">comic name</h2>
                                            <div className="comic__year">1980</div>
                                        </div>
                                    </article>

                                    <article className="comic">
                                        <div className="comic__img">
                                            <img loading="lazy" src={`${data?.results[0].thumbnail.path}/portrait_fantastic.${data?.results[0].thumbnail.extension}`} alt={`${data?.results[0].name} image}`} />
                                        </div>
                                        <div className="comic__information">
                                            <h2 className="comic__name text--size text--primary-color">comic name</h2>
                                            <div className="comic__year">1980</div>
                                        </div>
                                    </article>

                                    <article className="comic">
                                        <div className="comic__img">
                                            <img loading="lazy" src={`${data?.results[0].thumbnail.path}/portrait_fantastic.${data?.results[0].thumbnail.extension}`} alt={`${data?.results[0].name} image}`} />
                                        </div>
                                        <div className="comic__information">
                                            <h2 className="comic__name text--size text--primary-color">comic name</h2>
                                            <div className="comic__year">1980</div>
                                        </div>
                                    </article>

                                    <article className="comic">
                                        <div className="comic__img">
                                            <img loading="lazy" src={`${data?.results[0].thumbnail.path}/portrait_fantastic.${data?.results[0].thumbnail.extension}`} alt={`${data?.results[0].name} image}`} />
                                        </div>
                                        <div className="comic__information">
                                            <h2 className="comic__name text--size text--primary-color">comic name</h2>
                                            <div className="comic__year">1980</div>
                                        </div>
                                    </article>

                                    <article className="comic">
                                        <div className="comic__img">
                                            <img loading="lazy" src={`${data?.results[0].thumbnail.path}/portrait_fantastic.${data?.results[0].thumbnail.extension}`} alt={`${data?.results[0].name} image}`} />
                                        </div>
                                        <div className="comic__information">
                                            <h2 className="comic__name text--size text--primary-color">comic name</h2>
                                            <div className="comic__year">1980</div>
                                        </div>
                                    </article>

                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            }

        </>
    )

}