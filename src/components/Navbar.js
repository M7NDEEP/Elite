import React, { useState, useEffect } from 'react';
import styles from "@/components/Navbar.module.css";
import Link from 'next/link';
import { VscListSelection } from "react-icons/vsc";


const Navbar = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(
                currentScrollPos < prevScrollPos
            );
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos, visible]);

    return (
        <div className={`${styles.navbar} ${visible ? styles.visible : styles.hidden}`}>
            <div className={styles.logo}>
                <span style={{fontSize:'1.4rem'}}><i>Abhyudaya</i></span>
                <span style={{color:'#9d00ff'}}>E</span>lite
            </div>
            <ul>
                <li><Link href='/'>HOME</Link></li>
                <li><Link href='/about'>ABOUT</Link></li>
                <li><Link href='teams'>TEAM</Link></li>
                <li><Link href='/events'>EVENTS</Link></li>
                <li><Link href='/projects'>PROJECTS</Link></li>
                <li><Link href='/blog'>BLOG</Link></li>
            </ul>
            <div className={styles.contact}>
                <VscListSelection size={25}/>
            </div>
        </div>
    );
}

export default Navbar;
