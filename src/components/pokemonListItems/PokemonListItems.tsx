import type { FC } from 'react'
import type { IPokemonListItems } from './interface/pokemonListItems.interface'

import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const PokemonListItems: FC<IPokemonListItems> = ({ pokemonList }) => {
    return (
        <Box display="flex" flexWrap="wrap" gap={5} marginBottom={2}>
            {(pokemonList || []).map(({ name, url }) => (
                <Card sx={{ maxWidth: '300px' }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {name}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link to="/pokemon-detail" state={url}>
                            <Button size="small">Learn More</Button>
                        </Link>
                    </CardActions>
                </Card>
            ))}
        </Box>
    )
}

export default PokemonListItems
