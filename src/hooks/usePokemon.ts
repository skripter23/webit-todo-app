import type { IPokemonList, IPokemonListResponse } from '@/types/interfaces'
import { useEffect, useState } from 'react'

import axios from 'axios'

const usePokemon = () => {
    const [pokemonList, setPokemonList] = useState<Array<IPokemonList>>([])
    const [maximumCount, setMaximumCount] = useState<number>(Infinity)
    const [limit, setLimit] = useState<number>(20)

    useEffect(() => {
        axios
            .get<IPokemonListResponse>(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
            .then(({ data: { results, count } }) => {
                setPokemonList(results)
                setMaximumCount(count)
            })
    }, [limit])

    const handleMore = () => setLimit((prev) => prev + 20)

    return {
        pokemonList,
        maximumCount,
        handleMore,
    }
}

export default usePokemon
