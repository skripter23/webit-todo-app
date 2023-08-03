import type { FC, ReactNode } from 'react'
import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'

interface ILayout {
    children: ReactNode
}

const Layout: FC<ILayout> = ({ children }) => {
    return (
        <main>
            <Header />
            {children}
            <Footer />
        </main>
    )
}

export default Layout
