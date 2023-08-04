export const notEditableStyles = (whiteSpace: boolean, overflow: boolean, maxWidth: string) => ({
    whiteSpace: whiteSpace ? 'nowrap' : 'normal',
    overflow: overflow ? 'visible' : 'hidden',
    maxWidth,
    width: '100%',
})
