import Pokemons from '@/pages/pokemon/Pokemons'
import PokemonDetail from '@/pages/pokemonDetail/PokemonDetail'

import type { IRoute } from '@/router/routes/routePublic'

export const routePokemon: IRoute[] = [
    { path: '/pokemons', element: Pokemons },
    { path: '/pokemon-detail', element: PokemonDetail },
]
