import { UserBorrowedBooksList } from '../../components/organisms/UserBorrowedBooksList/UserBorrowedBooksList';
import styles from './UserBookBorrowedView.module.scss';

export const UserBookBorrowedView = () => {
	return (
		<>
			<h2 className={styles.title}>Borrowed books</h2>
			<UserBorrowedBooksList />
		</>
	);
};
