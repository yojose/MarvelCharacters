import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import useApi from "../../hooks/useApi/useApi";
import {optionAxios} from "../../types/charactersTypes"
import '../../styles/character.css';


export const Character: React.FC = () => {
    const { id } = useParams();
    const path="/charactaers";
    const maxcharacters=50;
    const [optionAxios, setOptionAxios] = useState<optionAxios>({
        method: 'get',
        params: {
            limit: maxcharacters,
            offset:0,
        }
    });
    const { data, isloading, error } = useApi(`${path}/${id}`,optionAxios);

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <>
           {(isloading === false) &&
                <section className="section--no-pading">
                <div className="character__container">
                    <div className="character__header">
                        <div className="character__infromation_container">
                            <div className="character__img">
                            <img loading="lazy" src={`${data?.results[0].thumbnail.path}/portrait_fantastic.${data?.results[0].thumbnail.extension}`} alt={`${data?.results[0].name} image}`} />
                            </div>
                            <div className="character__information">
                                <div className="character__name">{data?.results[0].name}</div>
                                <div className="character__description">{data?.results[0].description}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            }
        </>
    )

}