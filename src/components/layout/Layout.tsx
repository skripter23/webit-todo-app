import type { FC } from 'react'
import type { ILayout } from './interface/layout.interface'

import Header from './components/header/'
import Footer from './components/footer/'

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
