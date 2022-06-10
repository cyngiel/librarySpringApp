import styles from './Main.module.scss';

export const Main = ({ children }) => (
	<main className={styles.main}>{children}</main>
);
