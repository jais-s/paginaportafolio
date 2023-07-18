export default function NavBar() {
    return <nav className="nav">
        <a href="/"className="site-title">
        Portafolio
        </a>
            <ul>
                <li>
                    <a href="/Education">
                        Education
                    </a>
                </li>
                <li>
                    <a href="/Projects">
                        Projects
                    </a>
                </li>
                <li>
                    <a href="/About">
                        About me
                    </a>
                </li>
                <li>
                    <a href="/Contact">
                        Contact
                    </a>
                </li>
            </ul>
        
    </nav>
}
