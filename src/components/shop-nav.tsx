import { getShops } from "@/lib/server-utils";
import { ShopBtn } from "./shop-btn/shop-btn";


export const ShopNav = async () => {
    const shops = await getShops();

    if (!shops.length) return null;


    return (
        <>
            <h3>Shops:</h3>
            {shops.map(shop => (
                <ShopBtn key={shop.name} shop={shop} />
            ))}
        </>
    )
}