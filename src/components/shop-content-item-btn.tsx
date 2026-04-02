'use client'

import { usePreorderContext } from "@/contexts/preorder-provider";
import { Item } from "@/generated/prisma/client";
import { toast } from "react-toastify";


export const ShopContentItemBtn = ({ item }: { item: Item }) => {
    const { setSelectedItems } = usePreorderContext();

    const handleSetSelectedItems = () => {
        setSelectedItems(prev => prev.find(i => i.id === item.id) ? prev : [item, ...prev]);
        toast.success('The item was added to the cart');
    }

    return (
        <button onClick={handleSetSelectedItems}>
            Add to cart
        </button>
    )
}