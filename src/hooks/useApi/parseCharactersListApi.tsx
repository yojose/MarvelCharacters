import { useState, useEffect } from "react";

type Json = boolean | number | string | null | { [key: string]: Json } | Array<Json>;

const parseCharactersListApi = (data:Json) => {
    const [dataParsed, setDataParsed] = useState<Json>(null);

    useEffect(() => {
       
    }, []);

    return {dataParsed}
}

export default parseCharactersListApi;