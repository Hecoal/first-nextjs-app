import PostCard from "../../components/PostCard";
import React from "react";
import './post.css'
async function loadPosts(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    //await new Promise((resolve)=>setTimeout(resolve, 2000));
    return data;
}
async function PostPages(){
    const posts = await loadPosts();
    console.log(posts); //Post is an array!
    return (
        <div className="grid">
            {
                posts.map((post) => (
                    <PostCard post={post} key={post.id}/>
                ))
            }
        </div>
    );
}
export default PostPages;