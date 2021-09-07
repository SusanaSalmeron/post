import React from 'react';
import style from './footer.module.css';



export default function Footer() {
    return (
        <>
            <footer className={style.footer}>
                <div className={style.container}>
                    <p className={style.copyright}>© 2021</p>
                </div>
                <div className={style.subsContainer}>
                    <label className={style.label}>Subscribe!</label>
                    <input className={style.input} placeholder="email" />
                </div>

            </footer>
        </>
    )
}