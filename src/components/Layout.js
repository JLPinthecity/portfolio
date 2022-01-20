import {React, useState} from 'react';
import { Outlet } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import MinimalistFooter from './MinimalistFooter';
import '../App.css';

function Layout() {

    const [sidebar, setSidebar] = useState(false) 

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <div className="app">

            <div className="header">
                <Header clickMenuIcon={showSidebar} show={sidebar}/>
            </div>
            
            <div className="sidebar">
                <Sidebar className="sidebar" clickMenuIcon={showSidebar} show={sidebar}/>
            </div>

            <div className="main">
                <Outlet/>
            </div>

            <div className="footer">
                {window.location.pathname === '/' ? <Footer /> : <MinimalistFooter/>}  
            </div>
        </div>

    );
}

export default Layout;
