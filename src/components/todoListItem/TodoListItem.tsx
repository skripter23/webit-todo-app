import type { FC } from 'react'
import { memo } from 'react'

import { ListItem, IconButton, ListItemText } from '@mui/material'
import { DeleteOutlined } from '@mui/icons-material'

import useTodoListItem from '@/hooks/useTodoListItem'

import { ITodoListItem } from './interface/todoListItem.interface'

const TodoListItem: FC<ITodoListItem> = memo(({ date, description, id, name }) => {
    const { handleRemoveTodo } = useTodoListItem()

    return (
        <ListItem divider>
            <ListItemText primary={`Name: ${name}`} />
            <ListItemText primary={`Description: ${description}`} />
            <ListItemText primary={`Date: ${date}`} />
            <IconButton aria-label="Delete Todo" onClick={handleRemoveTodo.bind(null, id)}>
                <DeleteOutlined />
            </IconButton>
        </ListItem>
    )
})

export default TodoListItem
