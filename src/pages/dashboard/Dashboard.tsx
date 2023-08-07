import type { FC } from 'react'
import { useEffect, Suspense } from 'react'

import AddTodo from '@/components/addTodo/AddTodo'
import TodoListItem from '@/components/todoListItem/TodoListItem'

import { useAppDispatch, useAppSelector } from '@/redux/store'
import { fetchTodos } from '@/redux/slices/todoSlice'

const Dashboard: FC = () => {
    const { todos } = useAppSelector((state) => state.todosReducer)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch])

    return (
        <>
            <AddTodo />
            <Suspense fallback={<span>Loading...</span>}>
                {(todos || []).map((item, i) => (
                    <TodoListItem {...item} key={i} />
                ))}
            </Suspense>
        </>
    )
}

export default Dashboard
