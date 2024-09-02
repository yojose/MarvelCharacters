import { PropsWithChildren } from 'react'
import { CharacterResult } from './apiTypes'

export interface CharacterCardProps extends PropsWithChildren {
    character: CharacterResult | undefined
}

export interface UseCharacterCardContext {
    character: CharacterResult
}

export interface CharacterCardImg {
    src: string
}

export interface optionAxios {
    method: string
    params: {
        ts?: string
        limit?: number
        offset?: number
        apikey?: string
        hash?: string
        nameStartsWith?: string
    }
}
