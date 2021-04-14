import styles from './header.module.scss';

export function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.logo}></div>
            <div className={styles.title}>
                <span>My Delivery</span>
            </div>
        </div>
    )
}