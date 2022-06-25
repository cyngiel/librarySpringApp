import styles from './BookItemBorrowedAdmin.module.scss';
import PropTypes from 'prop-types';

export const BookItemBorrowedAdmin = ({
	bookItemId,
	reservationDate,
	deadline,
	userEmail,
	bookTitle,
	setCount,
}) => {
	const handleReturnedBook = async () => {
		await fetch(
			`http://localhost:8080/book/return?id=${bookItemId}`,
			{
				method: 'POST',
				headers: {
					'Authorization': `Bearer ${localStorage.getItem('Authorization')}`,
				},
			}
		);
		setCount()
	};

	let dateVar = deadline.split('-')
	dateVar[1] = `0${Number(dateVar[1]) + 1}`
	dateVar = dateVar.join('-');

	return (
		<li className={styles.bookItem}>
			<p className={styles.userSurname}>{userEmail}</p>
			<p className={styles.bookCatalogNum}>{bookTitle}</p>
			<p className={styles.bookDate}>{reservationDate}</p>
			<p className={styles.bookDate}>{dateVar}</p>
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
		reservationDate: PropTypes.string,
		deadline: PropTypes.string,
	}),
};
