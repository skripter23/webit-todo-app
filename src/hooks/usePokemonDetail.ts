import { useEffect, useState } from 'react'

import axios from 'axios'

import type { IPokemonDetailResponse } from '@/types/interfaces'

const usePokemonDetail = (url: string) => {
    const [pokemonDetail, setPokemonDetail] = useState<IPokemonDetailResponse>()

    useEffect(() => {
        axios.get<IPokemonDetailResponse>(url).then(({ data }) => setPokemonDetail(data))
    }, [])

    return {
        pokemonDetail,
    }
}

export default usePokemonDetail
