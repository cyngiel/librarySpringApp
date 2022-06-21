import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { removeUserStatus } from '../../../redux-toolkit/features/user/userSlice';
import styles from './Navigation.module.scss';

const AuthenticatedApp = () => {
	const navigation = useNavigate();
	const dispatch = useDispatch();
	const logOut = () => {
		dispatch(removeUserStatus(''));
		localStorage.removeItem('Authorization');
		navigation('/sign-in');
	};

	return (
		<ul className={styles.navMenuList}>
			<NavLink
				to='/'
				className={({ isActive }) =>
					isActive ? styles.active : styles.inactive
				}
			>
				{' '}
				Home{' '}
			</NavLink>
			<NavLink
				to='/books'
				className={({ isActive }) =>
					isActive ? styles.active : styles.inactive
				}
			>
				{' '}
				Books{' '}
			</NavLink>
			<NavLink
				to='/user-reserved-book'
				className={({ isActive }) =>
					isActive ? styles.active : styles.inactive
				}
			>
				{' '}
				Reserved books{' '}
			</NavLink>
			<NavLink
				to='/user-borrowed-book'
				className={({ isActive }) =>
					isActive ? styles.active : styles.inactive
				}
			>
				{' '}
				Borrowed books{' '}
			</NavLink>
			<button className={styles.inactive} onClick={logOut}>
				Logout{' '}
			</button>
		</ul>
	);
};

const UnauthenticatedApp = () => {
	return (
		<ul className={styles.navMenuList}>
			<NavLink
				to='/'
				className={({ isActive }) =>
					isActive ? styles.active : styles.inactive
				}
			>
				{' '}
				Home{' '}
			</NavLink>
			<NavLink
				to='/books'
				className={({ isActive }) =>
					isActive ? styles.active : styles.inactive
				}
			>
				{' '}
				Books{' '}
			</NavLink>
			<NavLink
				to='/sign-in'
				className={({ isActive }) =>
					isActive ? styles.active : styles.inactive
				}
			>
				{' '}
				Sign in{' '}
			</NavLink>
		</ul>
	);
};

export const Navigation = () => {
	const { userStatus } = useSelector((state) => state.user);
	if (userStatus) {
	}
	return (
		<nav className={styles.navMenuWrapper}>
			{localStorage.getItem('Authorization') ? (
				<AuthenticatedApp />
			) : (
				<UnauthenticatedApp />
			)}
		</nav>
	);
};
