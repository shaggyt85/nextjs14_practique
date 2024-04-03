import Link from "next/link"

export const Navbar = () => {
    return (
    <header>
        <nav>
            <ul>
                <Link href="/"><li>home</li></Link>
                <Link href="store"><li>store</li></Link>
            </ul>
        </nav>
    </header>
    )
}