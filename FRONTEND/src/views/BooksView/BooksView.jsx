import { BooksList } from '../../components/organisms/BooksList/BooksList';
import styles from './BooksView.module.scss';
export const BooksView = () => {
	return (
		<>
			<h2 className={styles.title}>List of books</h2>
			<BooksList />
		</>
	);
};
