'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from './header.module.css';


const activeStyle = {
    textDecoration: 'underline',
    fontWeight: 'bold'
}

export const Header = () => {
    const pathname = usePathname();

    return (
        <header>
            <nav>
                <ul className={styles.container}>
                    <li>
                        <Link href={'/'} style={pathname === '/' ? activeStyle : undefined}>Shop</Link>
                    </li>
                    <li>
                        <Link href='/shopping-cart' style={pathname === '/shopping-cart' ? activeStyle : undefined}>Shopping Cart</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}