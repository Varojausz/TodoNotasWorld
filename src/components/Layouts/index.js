import {LayoutStyle, SidebarStyle} from './styles'
import Menu from '../Menu'
import React,{useState} from 'react';
import { ReactComponent as Linkedin } from './../../assets/images/linkedin-brands.svg'; 

const Sidebar = (props) => {
    return (
        <SidebarStyle {...props} />
    )
}


export const Layout = ({headerHeight, children, sidebar1, sidebar2}) => {
    return (
        <LayoutStyle headerHeight={headerHeight}>
            {/* <div className="header"></div> */}
            <Menu/>
            <div className="main">
                <Sidebar sidebar1={sidebar1}/>
                <div className="content">{children}</div>
                <Sidebar sidebar2={sidebar2}/>
            </div>
            <section className="footer">
            <div><h4>Developed by Álvaro Ruiz Montaner</h4></div>
            <div><Linkedin/> <a target="_blank" href="https://www.linkedin.com/in/%C3%A1lvaro-ruiz-montaner-221a2b206/">https://www.linkedin.com/in/%C3%A1lvaro-ruiz-montaner-221a2b206/</a></div>
            </section>

        </LayoutStyle>
    )
}
