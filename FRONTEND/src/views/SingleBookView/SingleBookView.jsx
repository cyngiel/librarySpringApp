import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { booksData } from '../../data/books';
import { addBook } from '../../redux-toolkit/features/books/bookSlice';
import styles from './SingleBookView.module.scss';

export const SingleBookView = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const [
		{ title, author, category, date, description, available_items, items },
	] = booksData.filter((book) => book.id === id);

	const handleAddBook = () => dispatch(addBook(id));

	return (
		<article className={styles.wrapper}>
			<img
				src='https://picsum.photos/300/300'
				alt='book'
				className={styles.picture}
			/>
			<div className={styles.infoWrapper}>
				<div>
					<h2 className={styles.title}>{title}</h2>
					<h3>Author: {author}</h3>
					<p>Category: {category}</p>
					<p>Date of publication: {date}</p>
				</div>
				<div className={styles.bookState}>
					<p>{`Availability: ${available_items} / ${items}`}</p>
					<button className={styles.btn} onClick={handleAddBook}>
						Reserve
					</button>
				</div>
			</div>
			<div className={styles.descriptionBlock}>
				<h3>Description:</h3>
				<p className={styles.description}>{description}</p>
			</div>
		</article>
	);
};
