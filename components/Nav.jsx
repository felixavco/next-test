import Link from 'next/link'

const Nav = () => {
    return (
        <header>
            <nav>
                <li>
                    <Link href="/"><a>Home</a></Link>
                </li>
                <li>
                    <Link href="/about"><a>About us</a></Link>
                </li>
                <li>
                    <Link href="/services"><a>Our services</a></Link>
                </li>
                <li>
                    <Link href="/contact"><a>Contact us</a></Link>
                </li>
            </nav>
        </header>
    )
}

export default Nav
