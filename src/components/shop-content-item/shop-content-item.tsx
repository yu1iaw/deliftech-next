import { Item } from "@/generated/prisma/client";
import Image from "next/image";
import styles from './shop-content-item.module.css';
import { ShopContentItemBtn } from "../shop-content-item-btn";


const bgcolors: { [key: string]: string } = { '4': 'seagreen', '5': 'lightcoral', '6': 'steelblue' };

export const ShopContentItem = ({ item }: { item: Item }) => {
    return (
        <div className={styles.container}>
            <Image
                src="/not-available.jpg"
                alt="food logo"
                width={220}
                height={220}
                priority
            />
            <div>
                <p>{item.name}</p>
                <span style={{ backgroundColor: bgcolors[item.categoryId] }}></span>
            </div>
            <ShopContentItemBtn item={item} />
        </div>
    )
}