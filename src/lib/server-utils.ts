import 'server-only';
import prisma from './prisma';
import { cacheLife } from 'next/cache';


export const getShops = async () => {
    'use cache';
    cacheLife('weeks');

    try {
        const shops = await prisma.shop.findMany();

        return shops;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export const getShopContent = async (id = 4, categoryId?: string) => {
    'use cache';
    cacheLife('weeks');

    try {
        const shopContent = await prisma.shop.findUnique({
            where: { id },
            include: {
                items: {
                    // where: {
                    //     category: !categoryId
                    //         ? undefined
                    //         : typeof categoryId === "string"
                    //             ? { id: +categoryId }
                    //             : { OR: categoryId.map(c => ({ id: +c })) }
                    // }
                    where: {
                        category: !categoryId ? undefined : {
                            id: { in: categoryId.split(',').map(c => +c) }
                        }
                    }
                }
            }
        })

        return shopContent;
    } catch (error) {
        console.log(error);
        return null;
    }
}