import styles from './BooksList.module.scss';
import { BookItem } from '../BookItem/BookItem';
import { booksData } from '../../../data/books';
import { useSelector } from 'react-redux';

export const BooksList = () => {
	const { seatchWord } = useSelector((state) => state.search);

	return (
		<div className={styles.listWrapper}>
			<ul className={styles.bookList}>
				<li className={styles.bookItemHeader}>
					<p className={styles.bookTitle}>Title</p>
					<p className={styles.bookAuthor}>Author</p>
					<p className={styles.bookDate}>Created at</p>
					<p className={styles.bookAvailability}>Availability</p>
				</li>
				{booksData
					.filter((book) => book.title.includes(seatchWord))
					.map(({ id, title, author, date, available_items }) => (
						<BookItem
							key={id}
							id={id}
							title={title}
							author={author}
							date={date}
							availability={available_items}
						/>
					))}
			</ul>
		</div>
	);
};
