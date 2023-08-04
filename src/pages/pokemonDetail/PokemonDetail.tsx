import type { FC } from 'react'

import { Box, Card, CardContent, Typography } from '@mui/material'

import { useLocation } from 'react-router-dom'
import usePokemonDetail from '@/hooks/usePokemonDetail'
import PokemonDetailRow from '@/components/pokemonDetailRow/PokemonDetailRow'

const PokemonDetail: FC = () => {
    const { state: url } = useLocation()
    const { pokemonDetail } = usePokemonDetail(url)

    // It can be bigger, but i stop here because of task specification
    return (
        <Box display="flex" justifyContent="center" alignItems="center">
            <Card>
                <CardContent>
                    <img src={pokemonDetail?.sprites.other['official-artwork'].front_default} alt="Pokemon" />
                    <PokemonDetailRow
                        title="Name"
                        text={
                            (pokemonDetail?.name &&
                                pokemonDetail?.name[0].toUpperCase() + pokemonDetail?.name.slice(1)) ||
                            ''
                        }
                    />
                    <PokemonDetailRow title="Weight" text={String(pokemonDetail?.weight) || ''} />
                    <PokemonDetailRow title="Height" text={String(pokemonDetail?.height) || ''} />
                    <PokemonDetailRow title="Base experience" text={String(pokemonDetail?.base_experience) || ''} />
                </CardContent>
            </Card>
        </Box>
    )
}

export default PokemonDetail
