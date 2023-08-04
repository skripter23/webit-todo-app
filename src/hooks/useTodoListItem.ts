import { useState } from 'react'

import { remove, change } from '@/redux/slices/todoSlice'
import { useAppDispatch } from '@/redux/store'

import type { ITodoListItem } from '@/components/todoListItem/interface/todoListItem.interface'

const useTodoListItem = (todo: ITodoListItem) => {
    const dispatch = useAppDispatch()
    const [editable, setEdit] = useState<boolean>(false)

    const handleNameEdit = (name: string) => dispatch(change({ ...todo, name }))
    const handleDescriptionEdit = (description: string) => dispatch(change({ ...todo, description }))
    const handleDateEdit = (date: string) => dispatch(change({ ...todo, date }))
    const handleCancelEdit = () => setEdit(false)
    const handleRemoveTodo = (id: string) => dispatch(remove(id))
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
