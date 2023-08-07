import type { FC } from 'react'
import { Suspense } from 'react'

import { Paper } from '@mui/material'
import PokemonListItems from '@/components/pokemonListItems/PokemonListItems'
import PokemonListItemsTitle from '@/components/pokemonListItemsTitle/PokemonListItemsTitle'
import PokemonListItemsMoreButton from '@/components/pokemonListItemsMoreButton/PokemonListItemsMoreButton'

import usePokemonList from '@/hooks/usePokemonList'

const Pokemons: FC = () => {
    const { pokemonList, handleMore, maximumCount } = usePokemonList()

    return (
        <Paper style={{ margin: 10, padding: 10, textAlign: 'center' }}>
            <PokemonListItemsTitle title="Pokémons" />
            <Suspense fallback={<span>Loading...</span>}>
                <PokemonListItems pokemonList={pokemonList} />
            </Suspense>
            <PokemonListItemsMoreButton
                title="More pokemons!"
                pokemonList={pokemonList}
                handleMore={handleMore}
                maximumCount={maximumCount}
            />
        </Paper>
    )
}

export default Pokemons
