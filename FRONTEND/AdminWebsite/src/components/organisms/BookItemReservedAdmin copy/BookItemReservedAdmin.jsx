import styles from './BookItemReservedAdmin.module.scss';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addBook } from '../../../redux-toolkit/features/books/bookSlice';

export const BookItemReservedAdmin = ({
	userId,
	userName,
	userSurname,
	bookCatalogNum,
}) => {
	const dispatch = useDispatch();
	const handleAddBook = () => dispatch(addBook());

	return (
		<li className={styles.bookItem}>
			<p className={styles.userId}>{userId}</p>
			<p className={styles.userName}>{userName}</p>
			<p className={styles.userSurname}>{userSurname}</p>
			<p className={styles.bookCatalogNum}>{bookCatalogNum}</p>
			<button className={styles.btn} onClick={handleAddBook}>
				Borrowed
			</button>
		</li>
	);
};

BookItemReservedAdmin.propTypes = {
	articleData: PropTypes.shape({
		userId: PropTypes.number,
		userName: PropTypes.string,
		userSurname: PropTypes.string,
		bookCatalogNum: PropTypes.string,
	}),
};
