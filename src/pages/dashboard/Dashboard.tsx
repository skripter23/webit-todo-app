import type { FC } from 'react'

import AddTodo from '@/components/addTodo/AddTodo'
import TodoListItem from '@/components/todoListItem/TodoListItem'

import { useAppSelector } from '@/redux/store'

const Dashboard: FC = () => {
    const { todos } = useAppSelector((state) => state.todosReducer)

    return (
        <>
            <AddTodo />
            {(todos || []).map((item, i) => (
                <TodoListItem {...item} key={i} />
            ))}
        </>
    )
}

export default Dashboard
