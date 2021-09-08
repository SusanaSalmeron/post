import React from 'react';
import style from './postTitle.module.css';
import {
    Link
} from 'react-router-dom';


export default function PostTitle({ id, title }) {

    return (
        <article className={style.article} key={id}>
            <p className={style.title} >{title}</p>
            <Link
                to={`/blog/${id}/post`}>
                <span className={style.span}>
                    Read more...
                </span>
            </Link>
        </article>
    )
}
