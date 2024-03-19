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
        <div className="p-10">
            <div className=" text-white">
                <h1 className="text-xl font-bold flex justify-center">{post.id}.{post.title}</h1>
                <p>{post.body}</p>
            </div>
            <div className="flex justify-center text-xl pt-4">
                <h2>You might be interested...</h2>
            </div>
            <div>
                <Suspense fallback={<div>Loading...</div>}>
                    <PostPages />
                </Suspense>
            </div>
        </div>
    )
}

export default Page
