import type { FC } from 'react'

import { Box, Button, Card, CardActions, CardContent, Paper, Typography } from '@mui/material'

import usePokemon from '@/hooks/usePokemon'

const Pokemon: FC = () => {
    const { pokemonList, maximumCount, handleMore } = usePokemon()

    return (
        <Paper style={{ margin: 10, padding: 10, textAlign: 'center' }}>
            <Typography variant="h5" gutterBottom>
                Pokémons
            </Typography>
            <Box display="flex" flexWrap="wrap" gap={5} marginBottom={2}>
                {(pokemonList || []).map(({ name, url }) => (
                    <Card sx={{ maxWidth: '300px' }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                {name}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                ))}
            </Box>
            {pokemonList.length < maximumCount && (
                <Button variant="contained" size="small" onClick={handleMore}>
                    More pokemons!
                </Button>
            )}
        </Paper>
    )
}

export default Pokemon
