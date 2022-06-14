import { AdminBorrowedBooksList } from '../../components/organisms/AdminBorrowedBooksList/AdminBorrowedBooksList';
import styles from './AdminBookBorrowedView.module.scss';

export const AdminBookBorrowedView = () => {
	return (
		<>
			<h2 className={styles.title}>List of books borrowed by users</h2>
			<AdminBorrowedBooksList />
		</>
	);
};
