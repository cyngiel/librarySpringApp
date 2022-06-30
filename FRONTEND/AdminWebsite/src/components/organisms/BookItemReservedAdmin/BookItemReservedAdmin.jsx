import styles from './BookItemReservedAdmin.module.scss';
import PropTypes from 'prop-types';

export const 	BookItemReservedAdmin = ({
	bookItemId,
	reservationDate,
	deadline,
	userEmail,
	bookTitle,
	setCount,
}) => {
	
	const handleBorrowBook = async () => {
		await fetch(
			`http://localhost:8080/book/borrow?id=${bookItemId}`,
			{
				method: 'POST',
				headers: {
					'Authorization': `Bearer ${localStorage.getItem('AuthorizationAdmin')}`,
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
