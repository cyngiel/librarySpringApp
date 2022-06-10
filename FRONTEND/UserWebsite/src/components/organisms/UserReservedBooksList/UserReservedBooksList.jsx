import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BookItemReservedUser } from '../BookItemReservedUser/BookItemReservedUser';
import styles from './UserReservedBooksList.module.scss';

export const UserReservedBooksList = () => {
	const { seatchWord } = useSelector((state) => state.search);
	const [booksList, setBookList] = useState([]);
	const [countState, setCountState] = useState(false);
	const handleState = () => setCountState(prev => !prev)

	useEffect(() => {
		(async () => {
			const res = await fetch('http://localhost:8080/book/reserve/all');
			const bookData = await res.json();
			setBookList(bookData);
		})();
	}, [countState]);
	console.log(booksList);

	return (
		<div className={styles.listWrapper}>
			<ul className={styles.bookList}>
				<li className={styles.bookItemHeader}>
					<p className={styles.bookTitle}>Title</p>
					<p className={styles.bookAuthor}>Author</p>
					<p className={styles.bookCategory}>Category</p>
					<p className={styles.bookDate}>Reservation</p>
					<p className={styles.bookDate}>Deadline</p>
				</li>
				{booksList
					.filter((book) => book.title.includes(seatchWord))
					.map(({ book_item_id, title, author, category, publish_year }) => (
						<BookItemReservedUser 
						key={book_item_id}
						bookItemId={book_item_id}
						bookTitle={title}
						bookAuthor={author}
						bookCategory={category}
						reservationDate={publish_year}
						deadline={publish_year}
						setCount={handleState}
						/>
					))}
			</ul>
		</div>
	);
};
