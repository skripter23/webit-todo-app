import type { FC } from 'react'
import type { IPokemonList, IPokemonListResponse } from '@/types/interfaces'

import { useEffect, useState } from 'react'

import axios from 'axios'

const Pokemon: FC = () => {
    const [pokemonList, setPokemonList] = useState<Array<IPokemonList>>([])
    const [limit, setLimit] = useState<number>(20)

    useEffect(() => {
        axios.get<IPokemonListResponse>(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`).then(
            ({
                data: {
                    data: { results },
                },
            }) => setPokemonList(results),
        )
    }, [limit])

    return (
        <div>
            <h1>Pokémon List</h1>
            <ul>
                {pokemonList.map((pokemon) => (
                    <li key={pokemon.name}>{pokemon.name}</li>
                ))}
            </ul>
            <button onClick={setLimit.bind(null, (prev) => prev + 20)}>More</button>
        </div>
    )
}

export default Pokemon
