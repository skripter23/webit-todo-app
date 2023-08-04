import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

interface ITodo {
    id: string
    name: string
    description: string
    date: string
}
interface ITodoState {
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
        change(state, action: PayloadAction<ITodo>) {
            state.todos = state.todos.map((item) => (item.id === action.payload.id ? action.payload : item))
        },
    },
})

export const { add, remove, change } = todosSlice.actions

export default todosSlice.reducer
