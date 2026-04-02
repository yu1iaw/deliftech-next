'use client'

import { usePreorderContext } from "@/contexts/preorder-provider";
import { Item } from "@/generated/prisma/client";
import Image from "next/image";
import styles from './shopping-cart-selected-items.module.css';


export const ShoppingCartSelectedItems = ({ item }: { item: Item }) => {
    const { setSelectedItems } = usePreorderContext();

    return (
        <div className={styles.selectedItem}>
            <Image
                src="/not-available.jpg"
                alt="food logo"
                width={300}
                height={200}
                priority
                className={styles.image}
            />
            <div className={styles.itemInfo}>
                <p>{item.name}</p>
                <p>Price: ${item.price.toFixed(2)}</p>
                <input
                    onChange={(e) => setSelectedItems(prev => prev.map(i => i.id === item.id ? { ...i, quantity: +e.target.value } : i))}
                    type="number"
                    step={1}
                    min={1}
                    defaultValue={1}
                />
            </div>
            <button
                onClick={() => setSelectedItems(prev => prev.filter(i => i.id !== item.id))}
                className={styles.trashIcon}
            >
                🗑️
            </button>
        </div>
    )
}