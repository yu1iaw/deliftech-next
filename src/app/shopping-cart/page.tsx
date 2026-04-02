'use client'

import { ShoppingCartUserInfo } from "@/components/shopping-cart-user-info/shopping-cart-user-info";
import styles from "./shopping-cart.module.css";
import { ShoppingCartUserOrder } from "@/components/shopping-cart-user-order/shopping-cart-user-order";
import { useState } from "react";
import { FieldErrors } from "@/lib/types";


export default function ShoppingCart() {
    const [errors, setErrors] = useState<FieldErrors | null>(null);

    return (
        <div className={styles.page}>
            <div>
                <ShoppingCartUserInfo errors={errors} />
                <ShoppingCartUserOrder setErrors={setErrors} />
            </div>
        </div>
    )
}