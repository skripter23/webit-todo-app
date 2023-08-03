import { combineReducers } from '@reduxjs/toolkit'
import todosReducer from './slices/todoSlice'

export const rootReducer = combineReducers({
    todosReducer,
})

export type RootState = ReturnType<typeof rootReducer>
