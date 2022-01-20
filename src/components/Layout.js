import {React, useState} from 'react';
import '../App.css';
import { Outlet } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

function Layout() {

    const [sidebar, setSidebar] = useState(false) 

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <div className="wrapper">

            <div className="header">
                <Header clickMenuIcon={showSidebar} show={sidebar}/>
            </div>
            
            <div className="main">
                <Sidebar className="sidebar" clickMenuIcon={showSidebar} show={sidebar}/>
            </div>

            <main>
                <Outlet/>
            </main>

            <div className="footer">
                <Footer/>
            </div>
        </div>

    );
}

export default Layout
