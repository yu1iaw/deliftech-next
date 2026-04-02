import { ShopNav } from "@/components/shop-nav";
import styles from "./page.module.css";
import { Suspense } from "react";
import { ShopContent } from "@/components/shop-content";
import { Spinner } from "@/components/spinner";
import { ShopContentFilter } from "@/components/shop-content-filter/shop-content-filter";


export default async function Home(props: PageProps<'/'>) {
  // const orders = await prisma.order.findMany({
  //   where: {
  //     orderData: { path: ['name'], string_contains: 'YULIA' }
  //   }
  // })
  // console.log('orders: ', orders);


  return (
    <div className={styles.page}>
      <div>
        <div>
          <Suspense fallback={<Spinner />}>
            <ShopNav />
          </Suspense>
        </div>
        <div>
          <Suspense fallback={<Spinner />}>
            <ShopContentFilter />
            <ShopContent searchParamsPromise={props.searchParams} />
          </Suspense>
        </div>
      </div>

    </div>
  );
}
