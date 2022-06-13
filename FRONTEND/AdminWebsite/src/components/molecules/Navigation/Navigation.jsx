import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

export const Navigation = () => {
	return (
		<nav className={styles.navMenuWrapper}>
			<ul className={styles.navMenuList}>
				{/* <NavLink
					to='/'
					className={({ isActive }) =>
						isActive ? styles.active : styles.inactive
					}
				>
					Home
				</NavLink> */}
				<NavLink
					to='/admin-charts'
					className={({ isActive }) =>
						isActive ? styles.active : styles.inactive
					}
				>
					Data charts 
				</NavLink>
				<NavLink
					to='/add-news'
					className={({ isActive }) =>
						isActive ? styles.active : styles.inactive
					}
				>
					Add News
				</NavLink>
				<NavLink
					to='/add-book'
					className={({ isActive }) =>
						isActive ? styles.active : styles.inactive
					}
				>
					Add Book
				</NavLink>
				<NavLink
					to='/admin-books-list'
					className={({ isActive }) =>
						isActive ? styles.active : styles.inactive
					}
				>
					AB List
				</NavLink>
				<NavLink
					to='/admin-books-reserved'
					className={({ isActive }) =>
						isActive ? styles.active : styles.inactive
					}
				>
					AB Reserved
				</NavLink>
				<NavLink
					to='/admin-books-borrowed'
					className={({ isActive }) =>
						isActive ? styles.active : styles.inactive
					}
				>
					AB Borrowed
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
