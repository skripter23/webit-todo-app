import type { FC } from 'react'

import { Box, Card, CardContent, Typography } from '@mui/material'

import { useLocation } from 'react-router-dom'
import usePokemonDetail from '@/hooks/usePokemonDetail'

const PokemonDetail: FC = () => {
    const { state: url } = useLocation()
    const { pokemonDetail } = usePokemonDetail(url)

    // It can be bigger, but i stop here because of task specification
    return (
        <Box display="flex" justifyContent="center" alignItems="center">
            <Card>
                <CardContent>
                    <img src={pokemonDetail?.sprites.other['official-artwork'].front_default} alt="Pokemon" />
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Name:{' '}
                        {pokemonDetail?.name && pokemonDetail?.name[0].toUpperCase() + pokemonDetail?.name.slice(1)}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Weight: {pokemonDetail?.weight}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Height: {pokemonDetail?.height}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Base experience: {pokemonDetail?.base_experience}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    )
}

export default PokemonDetail
