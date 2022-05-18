import styles from './BooksList.module.scss';
import { BookItem } from '../BookItem/BookItem';
import { booksData } from '../../../data/books';


export const BooksList = () => {
  return (
		<ul className={styles.bookList}>
			<li className={styles.bookItem}>
				<p className={styles.bookTitle}>Title</p>
				<p className={styles.bookAuthor}>Author</p>
				<p className={styles.bookDate}>Created at</p>
				<p className={styles.bookAvailability}>Availability</p>
			</li>
      {booksData.map(({id, title, author, date, available_items}) => <BookItem key={id} id={id} title={title} author={author} date={date} availability={available_items} />)}
		</ul>
	);
};
