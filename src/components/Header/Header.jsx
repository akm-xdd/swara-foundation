import { React, useState } from 'react';
import { Link } from "react-router-dom";
import styles from './Header.module.css';
import logo from '../../assets/react.svg';

function Header(props) {

    const [toggle, setToggle] = useState(false);

    const toggleNav = () => {
        setToggle(!toggle);
    }

    const navLinks = [
        { name: 'Contact', link: '/' },
        { name: 'About', link: '/' },
        { name: 'Donate', link: '/' },
        { name: 'Our Work', link: '/' },
        { name: 'Press Release', link: '/' },
    ]

    return (
        <header className={`${styles.header} ${toggle ? styles.nav_active : ''}`}>

            <div className={styles.header_container}>

                <div className={styles.header_bar}>
                    <div className={styles.header_logo}>
                        <img className={styles.img} src={logo} alt="logo" />
                    </div>
                    <nav className={styles.nav}>
                        <span className={`${styles.menu_toggle} material-symbols-outlined`} onClick={toggleNav}>
                            {toggle ? 'close' : 'menu'}
                        </span>
                        <ul className={styles.ul}>
                            {navLinks.map((link, index) => {
                                return (
                                    <li key={index}><Link className={styles.link} to={link.link}>{link.name}</Link></li>
                                )
                            })
                            }
                        </ul>
                    </nav>
                </div>
                <div className={styles.header_nav}>
                    <ul className={styles.ul}>
                        <li className={styles.divider} />
                        {navLinks.map((link, index) => {
                            return (
                                <li key={index}><Link className={styles.link} to={link.link}>{link.name}</Link></li>
                            )
                        })
                        }
                    </ul>
                </div>
            </div>

        </header>
    );
}

export default Header;