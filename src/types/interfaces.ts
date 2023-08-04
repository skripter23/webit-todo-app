export interface AddTodoFormValues {
    name: string
    description: string
    date: string
}

export interface ITodo {
    id: string
    name: string
    description: string
    date: string
}

export interface ITodoState {
    todos: Array<ITodo>
}

export interface IPokemonList {
    name: string
    url: string
}

export interface IPokemonListResponse {
    count: number
    next: string | null
    previous: string | null
    results: Array<IPokemonList>
}

interface IPokemonDetailResponseAbilitiesAbility {
    name: string
    url: string
}

interface IPokemonDetailResponseAbilities {
    ability: IPokemonDetailResponseAbilitiesAbility
    is_hidden: false
    slot: number
}

interface IPokemonDetailResponseForm {
    name: string
    url: string
}

interface IPokemonDetailResponseGameIndicesVersion {
    name: string
    url: string
}

interface IPokemonDetailResponseGameIndices {
    game_index: number
    version: IPokemonDetailResponseGameIndicesVersion
}

interface IPokemonDetailResponseMovesMove {
    name: string
    url: string
}

interface IPokemonDetailResponseMovesVersionGroupDetailsMoveLearnMethod {
    name: string
    url: string
}

interface IPokemonDetailResponseMovesVersionGroupDetailsVersionGroup {
    name: string
    url: string
}

interface IPokemonDetailResponseMovesVersionGroupDetails {
    level_learned_at: number
    move_learn_method: IPokemonDetailResponseMovesVersionGroupDetailsMoveLearnMethod
    version_group: IPokemonDetailResponseMovesVersionGroupDetailsVersionGroup
}

interface IPokemonDetailResponseMoves {
    move: IPokemonDetailResponseMovesMove
    version_group_details: Array<IPokemonDetailResponseMovesVersionGroupDetails>
}

interface IPokemonDetailResponseSpecies {
    name: string
    url: string
}

interface IPokemonDetailResponseSpritesOthersDreamWorld {
    front_default: string
    front_female: string
}

interface IPokemonDetailResponseSpritesOthersHome {
    front_default: string
    front_female: string
    front_shiny: string
    front_shiny_female: string
}

interface IPokemonDetailResponseSpritesOthersOfficialArtwork {
    front_default: string
    front_shiny: string
}

interface IPokemonDetailResponseSpritesOthers {
    dream_world: IPokemonDetailResponseSpritesOthersDreamWorld
    home: IPokemonDetailResponseSpritesOthersHome
    'official-artwork': IPokemonDetailResponseSpritesOthersOfficialArtwork
}

interface IPokemonDetailResponseSprites {
    back_default: string
    back_female: string
    back_shiny: string
    back_shiny_female: string
    front_default: string
    front_female: string
    front_shiny: string
    front_shiny_female: string
    other: IPokemonDetailResponseSpritesOthers
}

interface IPokemonDetailResponseStatsStat {
    name: string
    url: string
}

interface IPokemonDetailResponseStats {
    base_stat: number
    effort: number
    stat: IPokemonDetailResponseStatsStat
}

interface IPokemonDetailResponseTypesType {
    name: string
    url: string
}

interface IPokemonDetailResponseTypes {
    slot: number
    type: IPokemonDetailResponseTypesType
}
export interface IPokemonDetailResponse {
    abilities: Array<IPokemonDetailResponseAbilities>
    base_experience: number
    forms: Array<IPokemonDetailResponseForm>
    game_indices: Array<IPokemonDetailResponseGameIndices>
    height: number
    held_items: []
    id: number
    is_default: true
    location_area_encounters: string
    moves: Array<IPokemonDetailResponseMoves>
    name: string
    order: number
    past_types: []
    species: IPokemonDetailResponseSpecies
    sprites: IPokemonDetailResponseSprites
    stats: Array<IPokemonDetailResponseStats>
    types: Array<IPokemonDetailResponseTypes>
    weight: number
}
