import Link from 'next/link'

export default function NotFound(){
    return(
        <section>
            <h1>401</h1>
            <p>Page not found</p>
            <Link href='/'>Home</Link>
        </section>
    )
}