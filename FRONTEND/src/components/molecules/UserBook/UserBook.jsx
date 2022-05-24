import PropTypes from 'prop-types';
import styles from './UserBook.module.scss';

export const UserBook = ({ id, title, author, rental, deadline, bookStatus }) => {
	return (
		<li className={styles.bookItem}>
			<p className={styles.bookTitle}>{title}</p>
			<p className={styles.bookAuthor}>{author}</p>
			<p className={styles.bookDate}>{rental}</p>
			<p className={styles.bookDate}>{deadline}</p>
			<p className={styles.bookStatus}>{bookStatus} </p>
		</li>
	);
};

UserBook.propTypes = {
	id: PropTypes.string,
	title: PropTypes.string,
	author: PropTypes.string,
	rental: PropTypes.string,
	deadline: PropTypes.string,
	bookStatus: PropTypes.string,
};
