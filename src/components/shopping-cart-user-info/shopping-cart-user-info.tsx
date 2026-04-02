import styles from './shopping-cart-user-info.module.css';
import { FieldErrors } from '@/lib/types';


export const ShoppingCartUserInfo = ({ errors }: { errors: FieldErrors | null }) => {
    return (
        <div className={styles.container}>
            <form id='form1'>
                <div className={styles.formControl}>
                    <label htmlFor='name'>Name</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        placeholder='Enter your name'
                        required
                    />
                    {errors?.errors.name && (
                        <span>{errors.errors.name}</span>
                    )}
                </div>
                <div className={styles.formControl}>
                    <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='Enter your email'
                        required
                    />
                    {errors?.errors.email && (
                        <span>{errors.errors.email}</span>
                    )}
                </div>
                <div className={styles.formControl}>
                    <label htmlFor='phone'>Phone</label>
                    <input
                        type='tel'
                        name='phone'
                        id='phone'
                        placeholder='Enter your phone number'
                        required
                    />
                    {errors?.errors.phone && (
                        <span>{errors.errors.phone}</span>
                    )}
                </div>
                <div className={styles.formControl}>
                    <label htmlFor='address'>Address</label>
                    <input
                        type='text'
                        name='address'
                        id='address'
                        placeholder='Enter your address'
                        required
                    />
                    {errors?.errors.address && (
                        <span>{errors.errors.address}</span>
                    )}
                </div>
            </form>
        </div>
    )
}