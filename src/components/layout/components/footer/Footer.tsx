import type { FC } from 'react'

import { Container, Grid, Typography } from '@mui/material'
import { styled } from '@mui/system'

const StyledFooter = styled('footer')({
    width: '100%',
    height: 'auto',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    marginTop: 'auto',
})

const Footer: FC = () => {
    return (
        <StyledFooter sx={{ backgroundColor: 'secondary.main' }}>
            <Container maxWidth="lg">
                <Grid container direction="column" alignItems="center">
                    <Grid item xs={12}>
                        <Typography color="black" variant="h5">
                            React Starter App
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography color="textSecondary" variant="subtitle1">
                            {`${new Date().getFullYear()} | React | Material UI | React Router`}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </StyledFooter>
    )
}

export default Footer
