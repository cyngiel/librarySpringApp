import styles from './BookItem.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const BookItem = ({ id, title, author, availability, items }) => {
	const handleReservedBook = async () => {
		await fetch(`http://localhost:8080/book/reserve?id=${id}`, {
			method: 'POST',
		});
	};

	return (
		<li className={styles.bookItem}>
			<p className={styles.bookTitle}>{title}</p>
			<p className={styles.bookAuthor}>{author}</p>
			<p className={styles.bookAvailability}>
				{availability} / {items}
			</p>
			<div className={styles.bookBtns}>
				<Link to={`/books/${id}`}>
					<button className={styles.btn}>Read more</button>
				</Link>
				<button className={styles.btn} onClick={handleReservedBook}>Reserve</button>
			</div>
		</li>
	);
};

BookItem.propTypes = {
	articleData: PropTypes.shape({
		id: PropTypes.number,
		title: PropTypes.string,
		author: PropTypes.string,
		date: PropTypes.string,
		availability: PropTypes.number,
		items: PropTypes.number,
	}),
};
