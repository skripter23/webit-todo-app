import type { FC } from 'react'
import type { ITodoListItem } from '../../interface/todoListItem.interface'

import { ListItemText } from '@mui/material'
import EditableField from './components/editableField/EditableField'

import useTodoListItem from '@/hooks/useTodoListItem'

const EditableItem: FC<ITodoListItem> = (todo) => {
    const { date, description, name } = todo
    const { handleNameEdit, handleDescriptionEdit, handleDateEdit } = useTodoListItem(todo)

    return (
        <>
            <ListItemText
                primary={
                    <EditableField
                        type="text"
                        defaultValue={name}
                        label="Name"
                        style={{ height: '1px', width: '100px' }}
                        onBlur={(e) => handleNameEdit(e.currentTarget.value)}
                    />
                }
            />
            <ListItemText
                primary={
                    <EditableField
                        type="text"
                        defaultValue={description}
                        label="Description"
                        style={{ height: '1px', width: '90px' }}
                        onBlur={(e) => handleDescriptionEdit(e.currentTarget.value)}
                    />
                }
            />
            <ListItemText
                primary={
                    <EditableField
                        type="date"
                        defaultValue={date}
                        label="Date"
                        style={{ height: '1px', width: '140px' }}
                        onBlur={(e) => handleDateEdit(e.currentTarget.value)}
                    />
                }
            />
        </>
    )
}

export default EditableItem
