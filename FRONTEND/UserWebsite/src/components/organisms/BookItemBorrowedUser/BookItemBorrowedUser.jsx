import styles from './BookItemBorrowedUser.module.scss';
import PropTypes from 'prop-types';

export const BookItemBorrowedUser = ({
	bookTitle,
	bookAuthor,
	bookCategory,
	reservationDate,
	deadline,
}) => {
	return (
		<li className={styles.bookItem}>
			<p className={styles.bookTitle}>{bookTitle}</p>
			<p className={styles.bookAuthor}>{bookAuthor}</p>
			<p className={styles.bookCategory}>{bookCategory}</p>
			<p className={styles.bookDate}>{reservationDate}</p>
			<p className={styles.bookDate}>{deadline}</p>
		</li>
	);
};

BookItemBorrowedUser.propTypes = {
	articleData: PropTypes.shape({
		bookTitle: PropTypes.string,
		bookAuthor: PropTypes.string,
		bookCategory: PropTypes.string,
		reservationDate: PropTypes.number,
		deadline: PropTypes.number,
	}),
};
