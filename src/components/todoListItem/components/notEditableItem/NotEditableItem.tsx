import type { FC } from 'react'

import { ListItemText } from '@mui/material'

import { ITodoListItem } from '../../interface/todoListItem.interface'

const NotEditableItem: FC<ITodoListItem> = ({ date, description, name }) => {
    return (
        <>
            <ListItemText
                primary={`Name: ${name}`}
                sx={{ whiteSpace: 'nowrap', overflow: 'hidden', maxWidth: '300px', width: '100%' }}
            />
            <ListItemText
                primary={`Description: ${description}`}
                sx={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    maxWidth: '800px',
                    width: '100%',
                }}
            />
            <ListItemText primary={`Date: ${date}`} sx={{ maxWidth: '300px', width: '100%' }} />
        </>
    )
}

export default NotEditableItem
