import type { FC } from 'react'
import type { ITodoListItem } from '../../interface/todoListItem.interface'

import { ListItemText } from '@mui/material'

import { notEditableStyles } from './helpers'

const NotEditableItem: FC<ITodoListItem> = ({ date, description, name }) => {
    return (
        <>
            <ListItemText primary={`Name: ${name}`} sx={notEditableStyles(true, false, '300px')} />
            <ListItemText primary={`Description: ${description}`} sx={notEditableStyles(true, false, '800px')} />
            <ListItemText primary={`Date: ${date}`} sx={notEditableStyles(false, true, '300px')} />
        </>
    )
}

export default NotEditableItem
