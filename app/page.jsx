'use client'

export default function HomePage() {
    return(
    <section>
        <h1>Hello World</h1>
        <button onClick={()=>{
            alert('Hello!');
        }}>Click Here!</button>
    </section>
    )
}