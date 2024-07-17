import React from "react"
import { Link, NavLink } from "react-router-dom"
import imageUrl from "/assets/images/donate.png"

export default function Header() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

 

    return (
        <header>
            <Link className="site-logo" to="/">Swara Foundation</Link>
            <nav>
                <NavLink
                    to="/"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    About
                </NavLink>
                <NavLink
                    to="/our-work"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Our Work
                </NavLink>
                <NavLink
                    to="/media"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Media
                </NavLink>
                <Link to="/donate" className="login-link">
                    <img
                        src={imageUrl}
                        className="login-icon"
                    />
                </Link>
            </nav>
        </header>
    )
}