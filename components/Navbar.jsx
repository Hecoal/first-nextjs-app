import Link from 'next/link';
import './Navbar.css'
export default function Navbar(){
    return(
        <nav className='navbar'>
          <Link href='/'>
            <h1>Navbar</h1>
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