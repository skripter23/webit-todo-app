import type { FC } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { AppBar, IconButton, Stack, Toolbar, Typography, useTheme } from '@mui/material'
import BuildIcon from '@mui/icons-material/Build'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { AccountCircle } from '@mui/icons-material'

import { ThemeSwitchContext } from '@/theme/theme'

const Header: FC = () => {
    const themeMaterial = useTheme()
    const { toggleColorMode } = useContext(ThemeSwitchContext)
    const navigate = useNavigate()

    return (
        <AppBar position="static">
            <Toolbar
                sx={{
                    justifyContent: 'space-around',
                    alignItems: 'center',
                }}
            >
                <Stack direction={`row`} spacing={3} alignItems={`center`}>
                    <BuildIcon />
                    <Typography variant={'h6'} component={'div'}>
                        Hello appbar
                    </Typography>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="primary-search-account-menu"
                        aria-haspopup="true"
                        color="inherit"
                        onClick={() => navigate('/sign-in')}
                    >
                        <AccountCircle />
                    </IconButton>
                </Stack>
                {themeMaterial.palette.mode} mode
                <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
                    {themeMaterial.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Header
