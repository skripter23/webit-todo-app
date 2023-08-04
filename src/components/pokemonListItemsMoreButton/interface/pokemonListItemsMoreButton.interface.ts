import type { IPokemonList } from '@/types/interfaces'

export interface IPokemonListItemsMoreButton {
    title: string
    pokemonList: Array<IPokemonList>
    handleMore: () => void
    maximumCount: number
}
