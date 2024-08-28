import { useState, useEffect, useRef } from "react";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { publickey, privatekey, baseUrl, charactersLimit } from "../../api/config";
import { Md5 } from 'ts-md5';
import { Data } from "../../types/apiTypes";
import { testDataCharactaersList } from "../../api/testData"
import { testDataComicList } from "../../api/testDataComic"

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

const useApi = function useAPI<T>(path: string, options: AxiosRequestConfig = defaultConfig){
    const [data, setData] = useState<Data<T>>();
    const [isloading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>();
    const abortControllerRef = useRef<AbortController | null>(null);


    useEffect(() => {
        console.debug("options change")
        //const apiKeyParam: { ts: string, hash: string } = getApiKeyParams();

        abortControllerRef.current?.abort();
        abortControllerRef.current = new AbortController();

        //const optionsAxios = { ...options,...{ baseURL: baseUrl,signal: abortControllerRef.current?.signal } };

        const defaultOptionsAxios={
            method: 'get',
            baseURL: baseUrl,
            signal: abortControllerRef.current?.signal ,
            params: {
                ts:"1724595161654",
                apikey:"996de6600f0fefd5d16ffc8e6a21adfd",
                hash:"bf15456d981d3fed53b273d34a14d3c7"
            }
        }

        const optionsAxios = { ...defaultOptionsAxios,...options,...{params:{...defaultOptionsAxios.params,...options.params}}};

        //const url = "https://gateway.marvel.com/v1/public/characters"+"?ts=1724595161654&limit=50&apiKey=996de6600f0fefd5d16ffc8e6a21adfd&hash=bf15456d981d3fed53b273d34a14d3c7&limit=50";
        const alternativeUrl = "https://gateway.marvel.com/v1/public/characters?ts=1724595161654&limit=50&apikey=996de6600f0fefd5d16ffc8e6a21adfd&hash=bf15456d981d3fed53b273d34a14d3c7";

        

        setIsLoading(true);

        const fetchData = async () => {
            try {
                //const response: AxiosResponse = await axios(path, optionsAxios);
                //setData(response.data.data);
                console.log(path.split("/").slice(-1))
                if("comic"!==(path.split("/").slice(-1).toString())){
                    setData(testDataCharactaersList.data as Data<T>)
                }else{
                    setData(testDataComicList.data as Data<T>)
                }
                setIsLoading(false);
            } catch (error) {
                let message;
                if (error instanceof Error) message = error.message
                else message = String(error)
                setError(message);
            }
        }
        fetchData();
    }, [options]);

    return { data, isloading, error }
}

export default useApi;