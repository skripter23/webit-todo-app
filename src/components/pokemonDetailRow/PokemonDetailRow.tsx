import type { FC } from 'react'
import type { IPokemonDetailRow } from './interface/pokemonDetailRow.interface'

import { Typography } from '@mui/material'

const PokemonDetailRow: FC<IPokemonDetailRow> = ({ text, title }) => {
    return (
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {title}: {text}
        </Typography>
    )
}

export default PokemonDetailRow
