import PostPages from "../page";
import { Suspense } from 'react'
async function loadPost(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();

    console.log(data);

    return data;
}
async function Page({ params }) {
    const post = await loadPost(params.id);
    return (
        <div>
            <h1>{post.id}.{post.title}</h1>
            <p>{post.body}</p>
            <hr />
            <h3>You might be interested...</h3>

            <Suspense fallback={<div>Loading...</div>}>
                <PostPages />
            </Suspense>
        </div>
    )
}

export default Page
