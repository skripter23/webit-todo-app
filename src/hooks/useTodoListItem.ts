import { useState } from 'react'

import { remove, change } from '@/redux/slices/todoSlice'
import { useAppDispatch } from '@/redux/store'

import type { ITodoListItem } from '@/components/todoListItem/interface/todoListItem.interface'

const useTodoListItem = (todo: ITodoListItem) => {
    const dispatch = useAppDispatch()
    const [editable, setEdit] = useState<boolean>(false)
    const [originalTodo] = useState<ITodoListItem>({ ...todo })

    const handleNameEdit = (newName: string) => dispatch(change({ ...todo, name: newName }))
    const handleDescriptionEdit = (newDesc: string) => dispatch(change({ ...todo, description: newDesc }))
    const handleDateEdit = (newDate: string) => dispatch(change({ ...todo, date: newDate }))
    const handleCancelEdit = () => dispatch(change(originalTodo)) && setEdit(false)
    const handleRemoveTodo = (todoId: string) => dispatch(remove(todoId))
    const handleEdit = () => setEdit(true)
    const handleSubmitEdit = () => setEdit(false)

    return {
        editable,
        handleRemoveTodo,
        handleEdit,
        handleCancelEdit,
        handleSubmitEdit,
        handleNameEdit,
        handleDescriptionEdit,
        handleDateEdit,
    }
}

export default useTodoListItem
