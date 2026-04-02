'use server'

import prisma from "./prisma";
import { Order } from "./types";
import { FormSchema } from "./utils";


export const addNewOrder = async (formData: FormData, order: Order) => {
    const validatedFields = FormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        address: formData.get('address')
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors
        }
    }

    try {
        await prisma.order.create({
            data: {
                orderData: {
                    ...validatedFields.data,
                    order: order.selectedItems,
                    total: order.total
                },
                shops: {
                    connect: order.selectedItems.map(item => ({ id: item.shopId }))
                }
            }
        })
    } catch (error) {
        console.log(error);

        if (error instanceof Error) {
            return error.message;
        }
        return 'Failed creating the order';
    }

}