'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from './shop-content-filter.module.css';


const filters = [{ id: '0', name: 'All' }, { id: '4', name: 'Burgers' }, { id: '5', name: 'Desserts' }, { id: '6', name: 'Drinks' }];

export const ShopContentFilter = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();


    const handleClick = (id: string) => {
        const params = new URLSearchParams(searchParams);

        if (id === '0') {
            params.delete('categories');
        } else {
            const value = params.get('categories');
            if (!value) {
                params.set('categories', id);
            } else {
                let split = value.split(',');
                const indexOfId = split.indexOf(id);
                if (indexOfId >= 0) {
                    split = split.filter(v => v !== id);
                } else {
                    split.push(id);
                }
                const newValue = split.join();
                if (newValue.length) {
                    params.set('categories', newValue);
                } else {
                    params.delete('categories');
                }
            }
        }

        router.replace(`${pathname}?${params.toString()}`);
    }

    return (
        <div className={styles.container}>
            {filters.map(f => {
                let backgroundColor = '';
                let fontWeight = '';
                if (!searchParams.has('categories')) {
                    if (f.id === '0') {
                        backgroundColor = '#a5bcd9';
                        fontWeight = '500';
                    }
                } else {
                    backgroundColor = searchParams.get('categories')?.includes(f.id) ? '#a5bcd9' : '';
                    fontWeight = searchParams.get('categories')?.includes(f.id) ? '500' : '';
                }

                return (
                    <button
                        key={f.id}
                        onClick={() => handleClick(f.id)}
                        style={{ backgroundColor, fontWeight }}
                    >
                        {f.name}
                    </button>
                )
            })}
        </div>
    )
}