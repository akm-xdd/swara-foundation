import React from 'react'
import style from './Footer.module.css'
import logo from "../../assets/react.svg";
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer>
            <div className={style.footer_container}>

                <div className={style.logo_container}>
                    <div className={style.logo_container_header}>
                        <img src={logo} className={style.logo} alt="logo" />
                        <h2 className={style.logo_text}>SWARA</h2>
                    </div>
                    <p>
                        Sector 15 Dwarka, New Delhi, <br/>Delhi, 110078
                    </p>
                    <p>
                        {/* 011-25087597, 011-25081015<br/> */}
                        <Link to="mailto:swara.foundation@example.com" className={style.quick_links_list_item_a}>swara.foundation@example.com</Link>
                    </p>
                </div>

                <div className={style.block_container}>

                    <iframe
                        className={style.map}
                        loading="lazy"
                        allowFullScreen=""
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://maps.google.com/maps?q=swara+Foundation&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    ></iframe>

                </div>

                <div className={`${style.block_container} ${style.quick_links}`}>
                    <h3 className={style.block_header}>Quick Links</h3>
                    <ul className={style.quick_links_list}>
                        <li className={style.quick_links_list_item}>
                            <Link className={style.quick_links_list_item_a} to="/">Home</Link>
                        </li>
                        <li className={style.quick_links_list_item}>
                            <Link className={style.quick_links_list_item_a} to="/">About Us</Link>
                        </li>
                        <li className={style.quick_links_list_item}>
                            <Link className={style.quick_links_list_item_a} to="#">Donate</Link>
                        </li>
                        <li className={style.quick_links_list_item}>
                            <Link className={style.quick_links_list_item_a} to="#">Contact Us</Link>
                        </li>
                    </ul>
                </div>

            </div>
            <div className={style.copyright}>
                <p className={style.copyright_text}>© 2024 Swara Foundation. All Rights Reserved.</p>
            </div>
        </footer>
    )
}