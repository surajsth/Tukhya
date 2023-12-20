import React from 'react'
import Navbar from './Navbar/Navbar'
import Main from './Main'
import Show from './Tab/Show'
import Timeline from './Timeline/Timeline'
import Location from './Location'
import Footer from './Footer'


function Layout() {
    return (

        <>
            <div style={{ background: "var(--gradient)" }}>
                <Navbar />
                <Main />
                <Timeline />
                <Show />
                <Location />
                <Footer />
            </div>
        </>
    )
}

export default Layout