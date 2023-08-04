import type { FC } from 'react'
import type { IPokemonListItemsTitle } from './interface/pokemonListItemsTitle.intereface'

import { Typography } from '@mui/material'

const PokemonListItemsTitle: FC<IPokemonListItemsTitle> = ({ title }) => {
    return (
        <Typography variant="h5" gutterBottom>
            {title}
        </Typography>
    )
}

export default PokemonListItemsTitle
