'use client'

import type { Shop } from "@/generated/prisma/client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from './shop-btn.module.css';


export const ShopBtn = ({ shop }: { shop: Shop }) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    let backgroundColor = '';
    let fontWeight = '';
    if (!searchParams.has('shop')) {
        if (shop.id === 4) {
            backgroundColor = '#a5bcd9';
            fontWeight = 'bold';
        }
    } else {
        if (searchParams.get('shop') === shop.id.toString()) {
            backgroundColor = '#a5bcd9';
            fontWeight = 'bold';
        }
    }

    return (
        <button
            onClick={() => router.replace(`${pathname}?shop=${shop.id}`)}
            style={{ backgroundColor, fontWeight }}
            className={styles.shopBtn}
        >
            {shop.name.toLocaleUpperCase()}
        </button>
    )
}