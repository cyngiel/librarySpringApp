import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { removeUserStatus } from '../../../redux-toolkit/features/user/userSlice';
import styles from './Navigation.module.scss';


const AuthenticatedApp = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const logOut = () => {
		console.log('logout')
		dispatch(removeUserStatus())
		localStorage.removeItem('Authorization')
		navigate('/sign-in')}

	return (
<ul className={styles.navMenuList}>
<NavLink to='/admin-charts' 	className={({ isActive }) =>
						isActive ? styles.active : styles.inactive
					}>	Data charts </NavLink>
				<NavLink to='/add-news'	className={({ isActive }) =>
						isActive ? styles.active : styles.inactive
					}>	Add News </NavLink>
				<NavLink to='/add-book'	className={({ isActive }) =>
						isActive ? styles.active : styles.inactive
					}>	Add Book</NavLink>
				<NavLink to='/admin-books-list'	className={({ isActive }) =>
						isActive ? styles.active : styles.inactive
					}>	AB List</NavLink>
				<NavLink to='/admin-books-reserved'	className={({ isActive }) =>
						isActive ? styles.active : styles.inactive
					}>	AB Reserved</NavLink>
				<NavLink to='/admin-books-borrowed'	className={({ isActive }) =>
						isActive ? styles.active : styles.inactive
					}>	AB Borrowed</NavLink>

					<button className={styles.inactive} onClick={logOut}>Logout </button>
			</ul>
	);
};

const UnauthenticatedApp = () => {
	return (
<ul className={styles.navMenuList}>
			</ul>
	);
};

export const Navigation = () => {
	const { userStatus } = useSelector(state => state.user)
	console.log('userStatus',userStatus)
	return (
		<nav className={styles.navMenuWrapper}>
			{localStorage.getItem('Authorization') ? <AuthenticatedApp /> : <UnauthenticatedApp />}
		</nav>
	);
};
