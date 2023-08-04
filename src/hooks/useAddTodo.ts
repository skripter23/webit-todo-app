import { add } from '@/redux/slices/todoSlice'
import { useAppDispatch } from '@/redux/store'

import type { FormikHelpers } from 'formik'
import type { AddTodoFormValues } from '@/types/interfaces'

import uuid from 'react-uuid'

const useAddTodo = () => {
    const dispatch = useAppDispatch()

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
