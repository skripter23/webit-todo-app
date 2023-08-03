import { Route, Routes } from 'react-router-dom'
import { IRoute, routePublic } from '@/router/routes/routePublic'
import { routeDashboard } from '@/router/routes/routeDashboard'
import { CssBaseline } from '@mui/material'
import * as React from 'react'
import { ThemeSettingProvider } from '@/theme/theme'
import Layout from '@/components/layout/Layout'

const ReturnComponent = (Component: React.ComponentType) => {
    return <Component />
}

export const MainRouter = () => {
    const allRoutes: IRoute[] = [...routePublic, ...routeDashboard]

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
