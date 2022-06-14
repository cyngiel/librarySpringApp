import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BookItemAdmin } from '../../components/organisms/BookItemAdmin/BookItemAdmin';
import styles from './AdminBooksList.module.scss'

export const AdminBooksList = () => {
  const { seatchWord } = useSelector((state) => state.search);
	const [booksList, setBookList] = useState([]);
	const [countState, setCountState] = useState(false);

	const handleState = () => setCountState(prev => !prev)

	useEffect(() => {
		(async () => {
			const res = await fetch('http://localhost:8080/book/all', {
				method: 'GET',
				headers: {
					'Authorization': `Bearer ${localStorage.getItem('Authorization')}`,
				},
			});
			const bookData = await res.json()
			setBookList(bookData)
		})()
	}, [countState])

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
						<BookItemAdmin
							key={book_id}
							id={book_id}
							title={title}
							author={author}
							availability={stockItemsCount}
							items = {items}
							setCount={handleState}
						/>
					))}
			</ul>
		</div>
	);
};
