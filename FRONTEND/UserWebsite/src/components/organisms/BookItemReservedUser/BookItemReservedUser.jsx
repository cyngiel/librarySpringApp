import styles from './BookItemReservedUser.module.scss';
import PropTypes from 'prop-types';

export const BookItemReservedUser = ({
	bookItemId,
	bookTitle,
	bookAuthor,
	bookCategory,
	reservationDate,
	deadline,
	setCount,
}) => {
	const handleUnreservedBook = async () => {
		await fetch(`http://localhost:8080/book/return?id=${bookItemId}`, {
			method: 'POST',
		});
		setCount();
	};

	return (
		<li className={styles.bookItem}>
			<p className={styles.bookTitle}>{bookTitle}</p>
			<p className={styles.bookAuthor}>{bookAuthor}</p>
			<p className={styles.bookCategory}>{bookCategory}</p>
			<p className={styles.bookDate}>{reservationDate}</p>
			<p className={styles.bookDate}>{deadline}</p>
			<button className={styles.btn} onClick={handleUnreservedBook}>
				Unreserve
			</button>
		</li>
	);
};

BookItemReservedUser.propTypes = {
	articleData: PropTypes.shape({
		bookItemId: PropTypes.number,
		bookTitle: PropTypes.string,
		bookAuthor: PropTypes.string,
		bookCategory: PropTypes.string,
		reservationDate: PropTypes.number,
		deadline: PropTypes.number,
	}),
};
