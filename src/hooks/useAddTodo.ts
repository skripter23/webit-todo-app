import { add } from '@/redux/slices/todoSlice'
import { useAppDispatch, useAppSelector } from '@/redux/store'

import type { FormikHelpers } from 'formik'

import uuid from 'react-uuid'

interface AddTodoFormValues {
    name: string
    description: string
    date: string
}

const useAddTodo = () => {
    const dispatch = useAppDispatch()
    const todos = useAppSelector((state) => state.todosReducer)
    console.log('useAddTodo  todos:', todos)

    const handleSubmit = (values: AddTodoFormValues, { resetForm }: FormikHelpers<AddTodoFormValues>) => {
        dispatch(add({ id: uuid(), ...values }))
        resetForm()
    }

    return {
        initialValues: {
            name: '',
            description: '',
            date: '',
        },
        onSubmit: handleSubmit,
    }
}

export default useAddTodo
