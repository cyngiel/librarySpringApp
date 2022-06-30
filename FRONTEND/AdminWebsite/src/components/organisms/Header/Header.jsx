import { Link } from 'react-router-dom';
import { SearchBookInput } from '../../atoms/SearchBookInput/SearchBookInput';
import { Navigation } from '../../molecules/Navigation/Navigation';
import styles from './Header.module.scss';

export const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.internalWrapper}>
				<div className={styles.haederBar}>
					<Link to='/' style={{ textDecoration: 'none' }}>
						<h1 className={styles.pageTitle}>Online bookstore</h1>
					</Link>
					<Navigation />
				</div>
				<SearchBookInput />
			</div>
		</header>
	);
};
