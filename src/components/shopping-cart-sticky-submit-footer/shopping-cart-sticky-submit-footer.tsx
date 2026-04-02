import styles from './shopping-cart-sticky-submit-footer.module.css';


export const ShoppingCartStickySubmitFooter = ({ formAction, isPending, total }: { formAction: (formData: FormData) => void, isPending: boolean, total: number }) => {
    return (
        <div className={styles.container}>
            <div></div>
            <div>
                <span>Total price: ${total.toFixed(2)}</span>
                <button
                    formAction={formAction}
                    type="submit"
                    form="form1"
                    disabled={isPending}
                >
                    {isPending ? 'Wait a sec' : 'Submit'}
                </button>
            </div>
        </div>

    )
}