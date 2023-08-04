import type { FC } from 'react'
import type { IPokemonListItemsMoreButton } from './interface/pokemonListItemsMoreButton.interface'

import { Button } from '@mui/material'

const PokemonListItemsMoreButton: FC<IPokemonListItemsMoreButton> = ({
    title,
    pokemonList,
    handleMore,
    maximumCount,
}) => {
    return (
        <>
            {pokemonList.length < maximumCount && (
                <Button variant="contained" size="small" onClick={handleMore}>
                    {title}
                </Button>
            )}
        </>
    )
}

export default PokemonListItemsMoreButton
