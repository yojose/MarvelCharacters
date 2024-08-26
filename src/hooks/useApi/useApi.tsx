import { useState, useEffect, useRef } from "react";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { publickey, privatekey, baseUrl, charactersLimit } from "../../api/config";
import { Md5 } from 'ts-md5';
import { Data } from "../../types/apiTypes";
import { testDataCharactaersList } from "../../api/testData"

const defaultConfig = {
    method: 'get',
    baseURL: baseUrl,
    params: {
        limit: charactersLimit,
    }
};

const getApiKeyParams = () => {
    const ts = new Date().getTime().toString();
    let message = "";
    let hash = "";

    if (publickey === undefined || privatekey == undefined) {
        throw new Error("enviroment variable not fund.");
    } else {
        message = `${ts}${publickey}${privatekey}`;
        message = ts + privatekey + publickey;
        hash = Md5.hashStr(message);
    }

    return { ts, hash }
}

const useApi = (path: string, options: AxiosRequestConfig = defaultConfig) => {
    const [data, setData] = useState<Data>();
    const [isloading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>();
    const abortControllerRef = useRef<AbortController | null>(null);


    useEffect(() => {

        const apiKeyParam: { ts: string, hash: string } = getApiKeyParams();
        const optionsAxios = { ...options, ...defaultConfig, ...{ signal: abortControllerRef.current?.signal } };

        const url = `${baseUrl}${path}?ts=${apiKeyParam.ts}&apiKey=${publickey}&hash=${apiKeyParam.hash}`;
        const alternativeUrl = "https://gateway.marvel.com/v1/public/characters?ts=1724595161654&limit=50&apikey=996de6600f0fefd5d16ffc8e6a21adfd&hash=bf15456d981d3fed53b273d34a14d3c7";

        abortControllerRef.current?.abort();
        abortControllerRef.current = new AbortController();

        setIsLoading(true);

        const fetchData = async () => {
            try {
                const response: AxiosResponse = await axios(url, { method: 'get', signal: abortControllerRef.current?.signal });
                //setData(response.data.data);
                setData(testDataCharactaersList.data)
                setIsLoading(false);
            } catch (error) {
                let message;
                if (error instanceof Error) message = error.message
                else message = String(error)
                setError(message);
            }
        }
        fetchData();
    }, [path]);

    return { data, isloading, error }
}

export default useApi;