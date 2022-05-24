import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

export const Navigation = () => {
	return (
		<nav className={styles.navMenuWrapper}>
			<ul className={styles.navMenuList}>
      <NavLink to='/home' className={( {isActive} ) => isActive ? styles.active : styles.inactive} >Home</NavLink>
      <NavLink to='/books' className={( {isActive} ) => isActive ? styles.active : styles.inactive} >Books</NavLink>
      <NavLink to='/add-book' className={( {isActive} ) => isActive ? styles.active : styles.inactive} >Add Book</NavLink>
      <NavLink to='/sign-in' className={( {isActive} ) => isActive ? styles.active : styles.inactive} >Sign in</NavLink>
      <NavLink to='/user-book-list' className={( {isActive} ) => isActive ? styles.active : styles.inactive} >User books</NavLink>
			</ul>
		</nav>
	);
};