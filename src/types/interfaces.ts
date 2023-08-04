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
    data: {
        count: number
        next: string | null
        previous: string | null
        results: Array<IPokemonList>
    }
}
