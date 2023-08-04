import type { ComponentType, FC, ReactNode } from 'react'
import { Route, Routes } from 'react-router-dom'

import { CssBaseline } from '@mui/material'
import { ThemeSettingProvider } from '@/theme/theme'
import Layout from '@/components/layout/'

import { IRoute, routePublic } from '@/router/routes/routePublic'
import { routeDashboard } from '@/router/routes/routeDashboard'
import { routePokemon } from '@/router/routes/routePokemon'

const ReturnComponent = (Component: ComponentType): ReactNode => {
    return <Component />
}

export const MainRouter: FC = () => {
    const allRoutes: IRoute[] = [...routePublic, ...routeDashboard, ...routePokemon]

    return (
        <ThemeSettingProvider>
            <CssBaseline />
            <Layout>
                <Routes>
                    {allRoutes.map((route: IRoute) => {
                        return <Route path={route.path} element={ReturnComponent(route.element)} key={route.path} />
                    })}
                </Routes>
            </Layout>
        </ThemeSettingProvider>
    )
}
