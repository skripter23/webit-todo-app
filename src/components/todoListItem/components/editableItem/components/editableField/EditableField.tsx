import type { FC } from 'react'
import type { IEditableField } from '../../interface/editableItem.interface'

import { Box, TextField } from '@mui/material'

const EditableField: FC<IEditableField> = ({ onBlur, type, defaultValue, style, label }) => {
    return (
        <Box display="flex" alignItems="center" gap={2}>
            <Box component="span">{label}: </Box>
            <TextField type={type} defaultValue={defaultValue} onBlur={onBlur} inputProps={{ style }} />
        </Box>
    )
}

export default EditableField
