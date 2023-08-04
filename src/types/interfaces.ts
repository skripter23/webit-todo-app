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
