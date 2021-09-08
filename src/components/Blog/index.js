import React, { useEffect, useState } from 'react';
import style from './blog.module.css';
import PostTitle from '../PostTitle';
import { getAllPotsts } from '../../services/postsService';
import NavBar from '../NavBar';
import Footer from '../Footer';

export default function Blog() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function fetchPosts() {
            let response = await getAllPotsts()
            setPosts(response.data)
        }
        fetchPosts()
    }, [])



    return (
        <>
            <NavBar />
            <div div className={style.blog}>
                {posts.map(post => {
                    return <PostTitle
                        id={post.id}
                        title={post.title}>
                    </PostTitle>
                })}
            </div>
            <Footer />
        </>
    )
}