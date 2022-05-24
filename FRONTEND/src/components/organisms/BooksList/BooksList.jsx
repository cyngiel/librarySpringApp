import styles from './BooksList.module.scss';
import { BookItem } from '../BookItem/BookItem';
import { booksData } from '../../../data/books';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export const BooksList = () => {
	const [books, setBooks] = useState()
	const { seatchWord } = useSelector((state) => state.search);

	useEffect( () => {
	// 	// const res = fetch('localhost:8080/book/all')
		// const res = fetch('https://en.wikipedia.org/wiki/Archery').then(data => data.json())
		const res = fetch('http://localhost:8080/book/all').then(data => data.json())
		console.log('request', res)
	}, [])



	return (
		<ul className={styles.bookList}>
			<li className={styles.bookItem}>
				<p className={styles.bookTitle}>Title</p>
				<p className={styles.bookAuthor}>Author</p>
				<p className={styles.bookDate}>Created at</p>
				<p className={styles.bookAvailability}>Availability</p>
			</li>
			{booksData.filter(book => book.title.includes(seatchWord)).map(({ id, title, author, date, available_items }) => (
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
	);
};
