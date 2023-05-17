import { useState } from 'react';
import '../styles/Navbar.scss'
import { Link } from "react-router-dom";

export const Navbar = () => {
    // const [nav, setNav] = useState([
    //     <Link className='link' to="/">Dashboard</Link>,
    //     <Link className='link' to="/about">About</Link>,
    //     <Link className='link' to="/courses">Courses</Link>,
    //     <Link className='link' to="/Contact">Contact</Link>
    // ])

    return (
        <div className='navBar'>
            <Link className='link' to="/">Dashboard</Link>,
            <Link className='link' to="/about">About</Link>,
            <Link className='link' to="/courses">Courses</Link>,
            <Link className='link' to="/Contact">Contact</Link>        
        </div>
    )
}