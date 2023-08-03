interface AddTodoFormValues {
    name: string
    description: string
    date: string
}

const useAddTodo = () => {
    const handleSubmit = (values: AddTodoFormValues) => {
        console.log(values)
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
