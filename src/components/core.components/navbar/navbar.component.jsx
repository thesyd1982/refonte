import React from 'react';
import PrivateNavbar from './private-navbar/private-navbar';
import PublicNavbar from './public-navbar/public-navbar';
import './navbar.styles.scss';

const Navbar = () => {
    const user = false;
    return ( user?<PrivateNavbar/>:<PublicNavbar/>);
}
 
export default Navbar;