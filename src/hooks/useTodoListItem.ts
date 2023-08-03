import { remove } from '@/redux/slices/todoSlice'
import { useAppDispatch } from '@/redux/store'

const useTodoListItem = () => {
    const dispatch = useAppDispatch()

    const handleRemoveTodo = (id: string) => {
        dispatch(remove(id))
    }

    return { handleRemoveTodo }
}

export default useTodoListItem
