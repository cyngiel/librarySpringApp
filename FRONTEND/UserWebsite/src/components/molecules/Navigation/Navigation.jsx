import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

export const Navigation = () => {
	return (
		<nav className={styles.navMenuWrapper}>
			<ul className={styles.navMenuList}>
				<NavLink
					to='/'
					className={({ isActive }) =>
						isActive ? styles.active : styles.inactive
					}
				>
					Home
				</NavLink>
				<NavLink
					to='/books'
					className={({ isActive }) =>
						isActive ? styles.active : styles.inactive
					}
				>
					Books
				</NavLink>
				<NavLink
					to='/user-reserved-book'
					className={({ isActive }) =>
						isActive ? styles.active : styles.inactive
					}
				>
					Reserved books
				</NavLink>
				<NavLink
					to='/user-borrowed-book'
					className={({ isActive }) =>
						isActive ? styles.active : styles.inactive
					}
				>
					Borrowed books
				</NavLink>
				<NavLink
					to='/sign-in'
					className={({ isActive }) =>
						isActive ? styles.active : styles.inactive
					}
				>
					Sign in
				</NavLink>
			</ul>
		</nav>
	);
};
