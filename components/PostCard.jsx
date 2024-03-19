'use client';
import React from "react"
import Link from 'next/link'

function PostCard({ post }) {
    return (
        <div>
            <Link href={`post/${post.id}`}>
                <h3>{post.id}.{post.title}</h3>
            </Link>
            <p>{post.body}</p>
            <button onClick={() => {
                window.location.href=`post/${post.id}`;
            }}>Read More</button>
        </div>
    )
}

export default PostCard;
