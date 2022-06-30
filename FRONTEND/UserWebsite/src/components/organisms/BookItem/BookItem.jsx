import styles from './BookItem.module.scss';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

export const BookItem = ({ id, title, author, availability, items, category, setCount }) => {
	const navigate = useNavigate()

	const handleReservedBook = async () => {
		await fetch(`http://localhost:8080/book/reserve?id=${id}`, {
			method: 'POST',
			headers: {
				'Authorization': `Bearer ${localStorage.getItem('Authorization')}`,
			},
		});
		setCount()
	};

	const handleIsLogIn = () => navigate('/sign-in')

	return (
		<li className={styles.bookItem}>
			<p className={styles.bookTitle}>{title}</p>
			<p className={styles.bookAuthor}>{author}</p>
			<p className={styles.bookAuthor}>{category}</p>
			<p className={styles.bookAvailability}>
				{availability} / {items}
			</p>
			<div className={styles.bookBtns}>
				<Link to={`/books/${id}`}>
					<button className={styles.btn}>Read more</button>
				</Link>
				<button className={styles.btn} onClick={localStorage.getItem('Authorization') ? handleReservedBook : handleIsLogIn}>Reserve</button>
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
