import Link from 'next/link';
import './Navbar.css'
export default function Navbar(){
    return(
        <nav className='navbar py-5 '>
          <Link href='/'>
            <h1 className='text-3xl font-bold'>Navbar</h1>
          </Link>
          <ul>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/about'>About</Link>
            </li>
            <li>
              <Link href='/post'>Posts</Link>
            </li>
          </ul>
        </nav>
    )
}