import React from 'react';
import {
    Link
} from 'react-router-dom';
import style from './navBar.module.css';



export default function NavBar() {
    return (
        <>
            <nav className={style.nav}>
                <ul className={style.ul}>
                    <li className={style.li}>
                        <Link to="/home">Home</Link>
                    </li>
                    <li className={style.li}>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li className={style.li}>
                        <Link to="/news">News</Link>
                    </li>
                    <li className={style.li}>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}