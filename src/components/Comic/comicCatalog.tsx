import React, { memo, useRef } from 'react'
import useApi from '../../hooks/useApi/useApi'
import '../../styles/comic.css'
import { ComicCard } from '../Cards/comicCard'
import { ComicsResult } from '../../types/apiTypes'

interface comicProps {
    id: string | undefined
}

const Comic: React.FC<comicProps> = ({ id }) => {
    const path = `characters/${id}/comics`
    const maxcharacters = 10
    const optionAxios = useRef({
        method: 'get',
        params: {
            limit: maxcharacters,
            offset: 0,
        },
    })
    const { data, isloading } = useApi<ComicsResult[]>(
        path,
        optionAxios.current
    )

    return (
        <>
            {isloading === false && (
                <section className="comics" data-testid="comic-section">
                    <div className="comics__container text--secondary-color">
                        <h2>COMICS</h2>
                        <div className="comics__catalog">
                            <div className="comics__scroll">
                                {data?.results.map((comic) => (
                                    <ComicCard comic={comic} key={comic.id}>
                                        <ComicCard.img />
                                        <ComicCard.Title>
                                            <ComicCard.Name />
                                            <ComicCard.Year />
                                        </ComicCard.Title>
                                    </ComicCard>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    )
}

export default memo(Comic)
