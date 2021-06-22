import * as React from "react";
import { Link } from "gatsby";
import { container, heading, navLinks, navLinksItem, navLinkText } from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
    return (
        <main className={container}>
            <title>{pageTitle}</title>
            <nav>
                <ul className={navLinks}>
                    <li><Link to="/" className={navLinkText}>Home</Link></li>
                    <li><Link to="/about" className={navLinkText}>About</Link></li>
                </ul>
            </nav>
            <h1 className={heading}>{pageTitle}</h1>
            {children}
        </main>
    )
}

export default Layout;