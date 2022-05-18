import { NavLink } from 'react-router-dom';
import { MenuItem } from '../../atoms/MenuItem/MenuItem';
import styles from './Navigation.module.scss';

export const Navigation = () => {
	return (
		<nav className={styles.navMenuWrapper}>
			<ul className={styles.navMenuList}>
      <NavLink to='/home' className={( {isActive} ) => isActive ? styles.active : styles.inactive} >Home</NavLink>
      <NavLink to='/books' className={( {isActive} ) => isActive ? styles.active : styles.inactive} >Books</NavLink>


			{/* <NavLink style={({isActive}) => ({color: isActive ? 'yellow' : 'gray'})}>Books</NavLink> */}
        {/* <MenuItem>home</MenuItem>
        <MenuItem>books</MenuItem> */}
			</ul>
		</nav>
	);
};