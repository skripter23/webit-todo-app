import type { CSSProperties, FocusEvent } from 'react'

export interface IEditableField {
    type: 'text' | 'date'
    onBlur: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>) => void
    defaultValue: string
    style: CSSProperties
    label: string
}
