import React, {
    useState,
    useEffect,
    createContext,
    useCallback,
    memo,
    useRef,
} from 'react'
import useApi from '../../hooks/useApi/useApi'
import { Data, CharacterResult } from '../../types/apiTypes'
import { CharacterCard } from '../../components/Cards/characterCard'
import SearchCharacters from '../../components/Search/searchCharacters'
import '../../styles/app.css'
import '../../styles/search.css'
import { optionAxios } from '../../types/charactersTypes'
import useFavoritesFilter from '../../hooks/filters/useFavoritesFilter'
import useCharactersContext from '../../hooks/useContexts/useCharactersContext'
import { useParams } from 'react-router-dom'
import { Loader } from '../../components/Loader/loader'
import { charactersLimit } from '../../configs/config'

export const CharactersContext = createContext<
    Data<CharacterResult[]> | undefined
>(undefined)

export const Characters: React.FC = () => {
    const path = '/characters'
    const firstRender = useRef(false)
    const [search, setSearch] = React.useState<string>('')
    const { favoritesFilter } = useParams()
    const [optionAxios, setOptionAxios] = useState<optionAxios>({
        method: 'get',
        params: {
            limit: charactersLimit,
            offset: 0,
        },
    })

    const { data, isloading } = useApi<CharacterResult[]>(path, optionAxios)
    const { favoritesDataFiltered, isFavoritesFiltered, notFilter } =
        useFavoritesFilter({ data, favoritesFilter })

    useEffect(() => {
        if (firstRender.current === false) {
            firstRender.current = true
            return
        }
        if (isFavoritesFiltered) notFilter()
        if (search !== '') {
            setOptionAxios({
                method: 'get',
                params: {
                    limit: charactersLimit,
                    offset: 0,
                    nameStartsWith: search,
                },
            })
        } else {
            setOptionAxios({
                method: 'get',
                params: {
                    limit: charactersLimit,
                    offset: 0,
                },
            })
        }
    }, [search])

    const onChangeSearch = useCallback((value: string) => {
        setSearch(value)
    }, [])

    return (
        <>
            <CharactersContext.Provider
                value={isFavoritesFiltered ? favoritesDataFiltered : data}
            >
                {
                    <>
                        {isloading === false && <Loader />}
                        <section className="section">
                            {favoritesFilter !== undefined && (
                                <h2 style={{ color: 'black' }}>FAVORITES</h2>
                            )}
                            {isloading === false && data !== undefined && (
                                <div
                                    className="characters__container"
                                    data-testid="characters"
                                >
                                    <SearchCharacters
                                        onChange={onChangeSearch}
                                        disable={false}
                                    />
                                    <MemoCharactersCards />
                                </div>
                            )}
                        </section>
                    </>
                }
            </CharactersContext.Provider>
        </>
    )
}

const CharactersCards = () => {
    const CharactersContext = useCharactersContext()
    return (
        <>
            {CharactersContext !== undefined &&
                CharactersContext.results.map((character) => (
                    <CharacterCard character={character} key={character.id}>
                        <CharacterCard.Imagen />
                        <CharacterCard.Title>
                            <CharacterCard.Name />
                            <CharacterCard.FavButton />
                        </CharacterCard.Title>
                    </CharacterCard>
                ))}
        </>
    )
}
const MemoCharactersCards = memo(CharactersCards)
