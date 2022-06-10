import styles from './MenuItem.module.scss';

export const MenuItem = ({ children }) => (
	<li className={styles.navMenuItem}>{children}</li>
);
