import React from 'react'
import Topbar from './Topbar'
import Mainbar from './Mainbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Searchbar from './Searchbar'
import MobileBottomNavigation from './MobileBottomNavigation'


export default function Layout() {
   
    return (
        <>
           
            <header className="header">
                <Topbar />
                <Searchbar />
                
                <Mainbar />
            </header>
            <Outlet />
            <Footer />
            <MobileBottomNavigation/>

        </>
    )
}
