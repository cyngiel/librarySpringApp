import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BookItemReserved } from '../../components/organisms/BookItemReserved/BookItemReserved';
import styles from './ReservedBooksView.module.scss'

export const ReservedBooks = () => {
	const { seatchWord } = useSelector((state) => state.search);
	const [booksList, setBookList] = useState([]);

	useEffect(() => {
		(async () => {
			const res = await fetch('http://localhost:8080/book/all');
			const bookData = await res.json()
			setBookList(bookData)
		})()
	}, [])

	return (
		<div className={styles.listWrapper}>
			<ul className={styles.bookList}>
				<li className={styles.bookItemHeader}>
					<p className={styles.bookTitle}>Title</p>
					<p className={styles.bookAuthor}>Author</p>
					<p className={styles.bookAvailability}>Availability</p>
				</li>
				{booksList
					.filter((book) => book.title.includes(seatchWord))
					.map(({ book_id, title, author, stockItemsCount, items}) => (
						<BookItemReserved
							key={book_id}
							id={book_id}
							title={title}
							author={author}
							availability={stockItemsCount}
							items = {items}
						/>
					))}
			</ul>
		</div>
	);
};