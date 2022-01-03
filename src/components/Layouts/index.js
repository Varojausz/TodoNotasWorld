import {LayoutStyle, SidebarStyle} from './styles'
import Menu from '../Menu'
import React,{useState} from 'react';

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
            <div className="footer"></div>
        </LayoutStyle>
    )
}
