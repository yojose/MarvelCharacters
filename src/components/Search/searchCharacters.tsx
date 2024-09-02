import React, { useState, useEffect } from 'react'
import useCharactersContext from '../../hooks/useContexts/useCharactersContext'
import '../../styles/search.css'
import { seachCharacters } from '../../types/searchCharactersTypes'
import { useDelay } from '../../hooks/useDelay'

const SearchCharacters = ({ onChange, disable }: seachCharacters) => {
    const [search, setSearch] = useState('')
    const delaySearch = useDelay(search)

    useEffect(() => {
        onChange(delaySearch)
    }, [delaySearch])

    return (
        <div className="search" data-testid="search">
            <div className="search__container">
                <form action="#" method="get" className="search__form">
                    <div className="icon__search"></div>
                    <div className="search__character-label roboto-condensed--400">
                        <input
                            className={
                                search === ''
                                    ? 'search__input'
                                    : 'search__input--active'
                            }
                            type="text"
                            name="search_character"
                            id="search_character"
                            placeholder="SEARCH A CHARACTER"
                            maxLength={200}
                            value={search}
                            disabled={disable}
                            onChange={(e) => setSearch(e.target.value)}
                            data-testid="searchInput"
                        />
                    </div>
                </form>
                <SearchCharactersResult />
            </div>
        </div>
    )
}

const SearchCharactersResult = () => {
    const CharactersContext = useCharactersContext()
    return (
        <div className="search__result roboto-condensed--400">
            {CharactersContext?.count} RESULT
        </div>
    )
}
export default SearchCharacters
