import React, { useEffect, useState } from 'react';
import style from './blog.module.css';
import {
    Link
} from 'react-router-dom';
import getAllPotsts from '../../services/postsService';

export default function Blog() {
    const [posts, setPosts] = useState([])
    const [post, setPost] = useState()

    useEffect(() => {
        async function fetchPosts() {
            let response = await getAllPotsts()
            setPosts(response.data)
        }
        fetchPosts()
    }, [])

    const handlePost = () => {
        setPost(posts.id)


    }

    return (
        <div div className={style.blog}>
            {posts.map(post => {
                return <article className={style.article}>
                    <p className={style.body}>{post.body}</p>
                    <span className={style.span}>
                        <Link to={`/post/${post.id}`} onClick={handlePost}>Read more...</Link>
                    </span>
                </article>
            })}
        </div>
    )
}