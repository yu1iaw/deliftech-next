
import { getShopContent } from "@/lib/server-utils";
import { ShopContentItem } from "./shop-content-item/shop-content-item";


export const ShopContent = async ({ searchParamsPromise }: { searchParamsPromise: Promise<Record<string, string | string[] | undefined>> }) => {

    const { shop: shopId, categories } = await searchParamsPromise;
    const shop = await getShopContent(shopId ? +shopId : undefined, categories as string);

    if (!shop) return null;

    return (
        shop.items.map(item => (
            <ShopContentItem key={item.id} item={item} />
        ))
    )
}