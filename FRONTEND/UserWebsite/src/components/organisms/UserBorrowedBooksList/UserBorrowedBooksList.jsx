import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BookItemBorrowedUser } from '../BookItemBorrowedUser/BookItemBorrowedUser';
import styles from './UserBorrowedBooksList.module.scss';

export const UserBorrowedBooksList = () => {
	const { seatchWord } = useSelector((state) => state.search);
	const [booksList, setBookList] = useState([]);

	useEffect(() => {
		(async () => {
			const res = await fetch('http://localhost:8080/book/borrow/all', {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('Authorization')}`,
				},
			});
			const bookData = await res.json();
			setBookList(bookData);
		})();
	}, []);
	// console.log(booksList);

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
					.map(({ book_item_id, title, date, author, category, publish_year }) => (
						<BookItemBorrowedUser
							key={book_item_id}
							bookTitle={title}
							bookAuthor={author}
							bookCategory={category}
							reservationDate={date}
							deadline={date}
						/>
					))}
			</ul>
		</div>
	);
};
