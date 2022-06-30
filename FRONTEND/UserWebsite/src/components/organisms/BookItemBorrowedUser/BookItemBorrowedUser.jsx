import styles from './BookItemBorrowedUser.module.scss';
import PropTypes from 'prop-types';

export const BookItemBorrowedUser = ({
	bookTitle,
	bookAuthor,
	bookCategory,
	reservationDate,
	deadline,
}) => {

	let dateVar = deadline.split('-')
	dateVar[1] = `0${Number(dateVar[1]) + 1}`
	dateVar = dateVar.join('-');

	return (
		<li className={styles.bookItem}>
			<p className={styles.bookTitle}>{bookTitle}</p>
			<p className={styles.bookAuthor}>{bookAuthor}</p>
			<p className={styles.bookCategory}>{bookCategory}</p>
			<p className={styles.bookDate}>{reservationDate}</p>
			<p className={styles.bookDate}>{dateVar}</p>
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
