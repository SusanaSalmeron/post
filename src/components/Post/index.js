import React, { useEffect, useState } from 'react';
import style from './post.module.css';
import { getPostById } from '../../services/postsService';
import { useParams } from 'react-router-dom';
import NavBar from '../NavBar';
import Footer from '../Footer';

export default function Post() {
    const [data, setData] = useState({});

    let { id } = useParams()

    useEffect(() => {
        async function fetchOnePost() {
            let response = await getPostById(id)
            setData(response.data)
        }
        fetchOnePost()
    }, [id])


    return (
        <>
            <NavBar />
            <div className={style.container}>
                <div className={style.post} value={data.id}><p>{data.body}</p></div>
            </div>
            <Footer />
        </>
    )


}