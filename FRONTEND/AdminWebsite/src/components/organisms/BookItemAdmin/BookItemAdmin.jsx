import styles from './BookItemAdmin.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const BookItemAdmin = ({ id, title, author, availability, items, setCount }) => {
	const handleAddBook = async () => {
		await fetch(`http://localhost:8080/book/add/item?book_id=${id}`, {
			method: 'POST',
			headers: {
				'Authorization': `Bearer ${localStorage.getItem('AuthorizationAdmin')}`,
			},
		});
		setCount()
	};

	return (
		<li className={styles.bookItem}>
			<p className={styles.bookTitle}>{title}</p>
			<p className={styles.bookAuthor}>{author}</p>
			<p className={styles.bookAvailability}>
				{availability} / {items}
			</p>
			<div className={styles.bookBtns}>
				<button className={styles.btn} onClick={handleAddBook}>
					Add
				</button>
				<Link to={`/books/${id}`}>
					<button className={styles.btn}>Read more</button>
				</Link>
			</div>
		</li>
	);
};

BookItemAdmin.propTypes = {
	articleData: PropTypes.shape({
		id: PropTypes.number,
		title: PropTypes.string,
		author: PropTypes.string,
		date: PropTypes.string,
		availability: PropTypes.number,
		items: PropTypes.number,
	}),
};
