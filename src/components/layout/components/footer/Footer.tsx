import type { FC } from 'react'

import { Button, Container, Grid, Typography } from '@mui/material'
import { styled } from '@mui/system'
import { Link } from 'react-router-dom'

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
                    <Link to="/pokemons">
                        <Button variant="contained">Go to POKEMONS!!!</Button>
                    </Link>
                </Grid>
            </Container>
        </StyledFooter>
    )
}

export default Footer
