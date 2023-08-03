import { type PayloadAction, createSlice } from '@reduxjs/toolkit'

interface ITodo {
    id: string
    name: string
    description: string
    date: string
}

export interface ITodoState {
    todos: Array<ITodo>
}

const initialState: ITodoState = {
    todos: [],
}

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        add(state, action: PayloadAction<ITodo>) {
            state.todos.push(action.payload)
        },
        remove(state, action: PayloadAction<string>) {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    },
})

export const { add, remove } = todosSlice.actions

export default todosSlice.reducer
