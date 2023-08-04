import type { FC } from 'react'
import type { ITodoListItem } from '../../interface/todoListItem.interface'

import { Box, ListItemText, TextField } from '@mui/material'
import useTodoListItem from '@/hooks/useTodoListItem'

const EditableItem: FC<ITodoListItem> = (todo) => {
    const { date, description, name } = todo
    const { handleNameEdit, handleDescriptionEdit, handleDateEdit } = useTodoListItem(todo)

    return (
        <>
            <ListItemText
                primary={
                    <Box display="flex" alignItems="center" gap={2}>
                        <Box component="span">Name: </Box>
                        <TextField
                            type="text"
                            defaultValue={name}
                            onBlur={(e) => handleNameEdit(e.currentTarget.value)}
                            inputProps={{
                                style: {
                                    height: '1px',
                                    width: '100px',
                                },
                            }}
                        />
                    </Box>
                }
            />
            <ListItemText
                primary={
                    <Box display="flex" alignItems="center" gap={2}>
                        <Box component="span">Description: </Box>
                        <TextField
                            type="text"
                            defaultValue={description}
                            onBlur={(e) => handleDescriptionEdit(e.currentTarget.value)}
                            inputProps={{
                                style: {
                                    height: '1px',
                                    width: '90px',
                                },
                            }}
                        />
                    </Box>
                }
            />
            <ListItemText
                primary={
                    <Box display="flex" alignItems="center" gap={2}>
                        <Box component="span">Date: </Box>
                        <TextField
                            type="date"
                            defaultValue={date}
                            onBlur={(e) => handleDateEdit(e.currentTarget.value)}
                            inputProps={{
                                style: {
                                    height: '1px',
                                    width: '140px',
                                },
                            }}
                        />
                    </Box>
                }
            />
        </>
    )
}

export default EditableItem
