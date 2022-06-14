import styles from './BookItemReservedAdmin.module.scss';
import PropTypes from 'prop-types';

export const BookItemReservedAdmin = ({
	bookItemId,
	userName,
	userSurname,
	userEmail,
	bookTitle,
	setCount,
}) => {
	const handleBorrowBook = async () => {
		await fetch(
			`http://localhost:8080/book/borrow?id=${bookItemId}`,
			{
				method: 'POST',
			}
		);
		setCount()
	};

	return (
		<li className={styles.bookItem}>
			<p className={styles.userId}>{userName}</p>
			<p className={styles.userName}>{userSurname}</p>
			<p className={styles.userSurname}>{userEmail}</p>
			<p className={styles.bookCatalogNum}>{bookTitle}</p>
			<button className={styles.btn} onClick={handleBorrowBook}>
				Borrowed
			</button>
		</li>
	);
};

BookItemReservedAdmin.propTypes = {
	articleData: PropTypes.shape({
		bookItemId: PropTypes.number,
		userId: PropTypes.number,
		userName: PropTypes.string,
		userSurname: PropTypes.string,
		userEmail: PropTypes.string,
		bookTitle: PropTypes.string,
	}),
};
