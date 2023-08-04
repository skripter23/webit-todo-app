import type { FC } from 'react'

import { ListItem, IconButton, Box } from '@mui/material'
import { DeleteOutlined, EditOutlined, DoneOutlined, CancelOutlined } from '@mui/icons-material'
import NotEditableItem from './components/notEditableItem/NotEditableItem'
import EditableItem from './components/editableItem/EditableItem'

import useTodoListItem from '@/hooks/useTodoListItem'

import { ITodoListItem } from './interface/todoListItem.interface'

const TodoListItem: FC<ITodoListItem> = (todo) => {
    const { handleSubmitEdit, handleRemoveTodo, handleEdit, handleCancelEdit, editable } = useTodoListItem(todo)

    return (
        <ListItem divider>
            <Box display="flex" justifyContent="space-between" minWidth="100%" gap={5}>
                {editable ? <EditableItem {...todo} /> : <NotEditableItem {...todo} />}
                {editable ? (
                    <Box display="flex">
                        <IconButton aria-label="Done changes" onClick={handleSubmitEdit}>
                            <DoneOutlined />
                        </IconButton>
                        <IconButton aria-label="Cancel Changes" onClick={handleCancelEdit}>
                            <CancelOutlined />
                        </IconButton>
                    </Box>
                ) : (
                    <Box display="flex">
                        <IconButton aria-label="Edit Todo" onClick={handleEdit}>
                            <EditOutlined />
                        </IconButton>
                        <IconButton aria-label="Delete Todo" onClick={handleRemoveTodo.bind(null, todo.id)}>
                            <DeleteOutlined />
                        </IconButton>
                    </Box>
                )}
            </Box>
        </ListItem>
    )
}

export default TodoListItem
