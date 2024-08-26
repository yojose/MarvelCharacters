import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";


export const Character: React.FC = () => {

    const [character, setCharacter] = useState(0);

    useEffect(() => {
        setCharacter(1);
    }, []);

    return (
        <>
            <div>character.{character}</div>
            <div>
                <Link to={`../charactersList`} key={1} style={{ textDecoration: "none" }}>
                    charcters list page
                </Link>
            </div>
        </>
    )

}