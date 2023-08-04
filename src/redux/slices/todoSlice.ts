import type { ITodo, ITodoState } from '@/types/interfaces'
import type { PayloadAction } from '@reduxjs/toolkit'

import { createSlice } from '@reduxjs/toolkit'

import { setDoc, doc, deleteDoc, getDocs, collection } from '@firebase/firestore'
import { firestore } from '@/firebase'

const fetchInitialTodos = async () => {
    const querySnapshot = await getDocs(collection(firestore, 'todos'))
    const todos = querySnapshot.docs.map((docum) => ({
        id: docum.id,
        ...docum.data(),
    })) as ITodo[]

    return todos
}

const initialState: ITodoState = {
    todos: [],
}

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        fill(state, action: PayloadAction<Array<ITodo>>) {
            state.todos = action.payload
        },
        add(state, action: PayloadAction<ITodo>) {
            state.todos.push(action.payload)
            const { date, description, id, name } = action.payload
            setDoc(doc(firestore, 'todos', id), { date, description, name })
        },
        remove(state, action: PayloadAction<string>) {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
            deleteDoc(doc(firestore, 'todos', action.payload))
        },
        change(state, action: PayloadAction<ITodo>) {
            state.todos = state.todos.map((item) => (item.id === action.payload.id ? action.payload : item))
            const { date, description, id, name } = action.payload
            setDoc(doc(firestore, 'todos', id), { date, description, name })
        },
    },
})

export const fetchTodos = () => async (dispatch: any) => {
    try {
        const todos = await fetchInitialTodos()
        dispatch(todosSlice.actions.fill(todos))
    } catch (error) {
        console.error('Error fetching todos:', error)
    }
}

export const { add, remove, change, fill } = todosSlice.actions

export default todosSlice.reducer
