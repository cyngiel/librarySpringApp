import styles from './BookItem.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addBook } from '../../../redux-toolkit/features/books/bookSlice';

export const BookItem = ({ id, title, author, date, availability }) => {
	const dispatch = useDispatch();
	const handleAddBook = () => dispatch(addBook(id));

	return (
		<li className={styles.bookItem}>
			<p className={styles.bookTitle}>{title}</p>
			<p className={styles.bookAuthor}>{author}</p>
			<p className={styles.bookDate}>{date}</p>
			<p className={styles.bookAvailability}>{availability}</p>
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

BookItem.propTypes = {
	articleData: PropTypes.shape({
		id: PropTypes.string,
		title: PropTypes.string,
		author: PropTypes.string,
		date: PropTypes.string,
		availability: PropTypes.number,
	}),
};
