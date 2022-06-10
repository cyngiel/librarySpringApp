import styles from './BookItemReserved.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addBook } from '../../../redux-toolkit/features/books/bookSlice';

export const BookItemReserved = ({ id, title, author, availability, items }) => {
	const dispatch = useDispatch();
	const handleAddBook = () => dispatch(addBook(id));

	return (
		<li className={styles.bookItem}>
			<p className={styles.bookTitle}>{title}</p>
			<p className={styles.bookAuthor}>{author}</p>
			<p className={styles.bookAvailability}>{availability} / {items}</p>
			<div className={styles.bookBtns}>
				<Link to={`/books/${id}`}>
					<button className={styles.btn}>Read more</button>
				</Link>
				<button className={styles.btn} onClick={handleAddBook}>
					Reserve
				</button>
			</div>
		</li>
	);
};

BookItemReserved.propTypes = {
	articleData: PropTypes.shape({
		id: PropTypes.number,
		title: PropTypes.string,
		author: PropTypes.string,
		date: PropTypes.string,
		availability: PropTypes.number,
		items: PropTypes.number,
	}),
};
