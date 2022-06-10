import styles from './BookItemBorrowedAdmin.module.scss';
import PropTypes from 'prop-types';

export const BookItemBorrowedAdmin = ({
	bookItemId,
	userName,
	userSurname,
	userEmail,
	bookTitle,
	setCount,
}) => {
	const handleReturnedBook = async () => {
		await fetch(
			`http://localhost:8080/book/return?id=${bookItemId}`,
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
			<button className={styles.btn} onClick={handleReturnedBook}>
				Returned
			</button>
		</li>
	);
};

BookItemBorrowedAdmin.propTypes = {
	articleData: PropTypes.shape({
		bookItemId: PropTypes.number,
		userId: PropTypes.number,
		userName: PropTypes.string,
		userSurname: PropTypes.string,
		userEmail: PropTypes.string,
		bookTitle: PropTypes.string,
	}),
};
