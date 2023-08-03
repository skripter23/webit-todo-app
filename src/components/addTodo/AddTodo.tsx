import type { FC } from 'react'

import { Paper, Box, Button, TextField } from '@mui/material'
import { Formik, Form, Field } from 'formik'

import useAddTodo from '@/hooks/useAddTodo'

const AddTodo: FC = () => {
    const { initialValues, onSubmit } = useAddTodo()

    return (
        <Paper style={{ margin: 10, padding: 10 }}>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {({ handleChange, values: { date, description, name } }) => (
                    <Form>
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                            <Field
                                id="name"
                                name="name"
                                label="Name"
                                type="text"
                                placeholder="Add name here"
                                value={name}
                                onChange={handleChange}
                                component={TextField}
                            />
                            <Field
                                id="description"
                                name="description"
                                label="Description"
                                type="text"
                                placeholder="Add description here"
                                value={description}
                                onChange={handleChange}
                                component={TextField}
                            />
                            <Field
                                id="date"
                                name="date"
                                type="date"
                                value={date}
                                onChange={handleChange}
                                component={TextField}
                            />
                            <Button color="secondary" variant="outlined" type="submit">
                                Add
                            </Button>
                        </Box>
                    </Form>
                )}
            </Formik>
        </Paper>
    )
}

export default AddTodo
