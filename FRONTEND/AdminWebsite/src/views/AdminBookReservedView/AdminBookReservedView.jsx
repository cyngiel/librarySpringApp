import { AdminReservedBooksList } from '../../components/organisms/AdminReservedBooksList/AdminReservedBooksList';
import styles from './AdminBookReservedView.module.scss';

export const AdminBookReservedView = () => {
	return (
		<>
			<h2 className={styles.title}>List of books reserved by users</h2>
			<AdminReservedBooksList />
		</>
	);
};
