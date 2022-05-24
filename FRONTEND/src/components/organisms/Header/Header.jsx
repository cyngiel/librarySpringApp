import styles from './Header.module.scss';
import { Navigation } from '../../molecules/Navigation/Navigation';
import { SearchBookInput } from '../../atoms/SearchBookInput/SearchBookInput';


export const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.internalWrapper}>
				<h1 className={styles.pageTitle}>Online bookstore</h1>
				<SearchBookInput />
        <Navigation />
			</div>
		</header>
	);
};
