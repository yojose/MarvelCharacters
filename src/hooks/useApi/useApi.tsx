import { useState, useEffect, useRef } from 'react'
import { baseUrl, charactersLimit } from '../../configs/config'
import { Data } from '../../types/apiTypes'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const defaultConfig = {
    method: 'get',
    baseURL: baseUrl,
    params: {
        limit: charactersLimit,
    },
}

const useApi = function useAPI<T>(
    path: string,
    options: AxiosRequestConfig = defaultConfig
) {
    const [data, setData] = useState<Data<T>>()
    const [isloading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<string>()
    const abortControllerRef = useRef<AbortController | null>(null)

    useEffect(() => {
        //const apiKeyParam: { ts: string, hash: string } = getApiKeyParams();

        abortControllerRef.current?.abort()
        abortControllerRef.current = new AbortController()

        //const optionsAxios = { ...options,...{ baseURL: baseUrl,signal: abortControllerRef.current?.signal } };

        const defaultOptionsAxios = {
            method: 'get',
            baseURL: baseUrl,
            signal: abortControllerRef.current?.signal,
            params: {
                ts: '1724595161654',
                apikey: '996de6600f0fefd5d16ffc8e6a21adfd',
                hash: 'bf15456d981d3fed53b273d34a14d3c7',
            },
        }

        const optionsAxios = {
            ...defaultOptionsAxios,
            ...options,
            ...{ params: { ...defaultOptionsAxios.params, ...options.params } },
        }

        setIsLoading(true)

        const fetchData = async () => {
            try {
                const response: AxiosResponse = await axios.get(
                    path,
                    optionsAxios
                )
                setData(response.data.data)

                /*if("comic"!==(path.split("/").slice(-1).toString())){
                    setData(testDataCharactaersList.data as Data<T>)
                }else{
                    setData(testDataComicList.data as Data<T>)
                }*/
                setIsLoading(false)
            } catch (error) {
                console.log(error)
                let message
                if (error instanceof Error) message = error.message
                else message = String(error)
                setError(message)
            }
        }
        fetchData()

        return () => {
            //abortControllerRef.current?.abort();
        }
    }, [options])

    return { data, isloading, error }
}

export default useApi
