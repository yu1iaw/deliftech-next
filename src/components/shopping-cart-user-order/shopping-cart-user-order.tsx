'use client'

import { usePreorderContext } from "@/contexts/preorder-provider";
import { ShoppingCartSelectedItems } from "../shopping-cart-selected-items/shopping-cart-selected-items";
import Link from "next/link";
import { addNewOrder } from "@/lib/actions";
import { useTransition } from "react";
import { toast } from "react-toastify";
import { FieldErrors } from "@/lib/types";
import { ShoppingCartStickySubmitFooter } from "../shopping-cart-sticky-submit-footer/shopping-cart-sticky-submit-footer";
import styles from './shopping-cart-user-order.module.css';


export const ShoppingCartUserOrder = ({ setErrors }: { setErrors: React.Dispatch<React.SetStateAction<FieldErrors | null>> }) => {
    const [isPending, startTransition] = useTransition();
    const { selectedItems, setSelectedItems } = usePreorderContext();

    const total = selectedItems.reduce((acc, curr) => acc + (curr.price * (curr.quantity ?? 1)), 0);


    const formAction = (formData: FormData) => {
        setErrors(null);

        startTransition(async () => {
            const err = await addNewOrder(formData, { selectedItems, total });
            if (err) {
                if (typeof err === 'object') {
                    setErrors(err);
                    return;
                } else if (typeof err === 'string') {
                    toast.error(err);
                    return;
                }
            }
            setSelectedItems([]);
            toast.success('Your order is on its way!');
        })
    }

    return (
        <div className={styles.container}>
            {selectedItems.map(selected => (
                <ShoppingCartSelectedItems key={selected.name} item={selected} />
            ))}

            {selectedItems.length > 0 ? (
                <ShoppingCartStickySubmitFooter formAction={formAction} total={total} isPending={isPending} />
            ) : (
                <div className={styles.emptyBox}>
                    <span>You have no selected items yet</span>
                    <Link href='/'>To the shop</Link>
                </div>
            )}
        </div>
    )
}