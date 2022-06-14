import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BookItemBorrowedAdmin } from '../BookItemBorrowedAdmin/BookItemBorrowedAdmin';
import styles from './AdminBorrowedBooksList.module.scss'

export const AdminBorrowedBooksList = () => {
	const { seatchWord } = useSelector((state) => state.search);
	const [booksList, setBookList] = useState([]);
	const [countState, setCountState] = useState(false);
	const handleState = () => setCountState(prev => !prev)

	useEffect(() => {
		(async () => {
			const res = await fetch('http://localhost:8080/book/borrow/all');
			const bookData = await res.json()
			setBookList(bookData)
		})()
	}, [countState])

	return (
		<div className={styles.listWrapper}>
			<ul className={styles.bookList}>
				<li className={styles.bookItemHeader}>
					<p className={styles.userName}>Name</p>
					<p className={styles.userSurname}>Surname</p>
					<p className={styles.userID}>Email</p>
					<p className={styles.bookCatalogNum}>Book title</p>
					<p className={styles.bookCatalogNum}>Action</p>
				</li>
				{booksList
					.filter((book) => book.title.includes(seatchWord))
					.map(({ book_item_id, book_id: userId, author: userName, items, title }) => (
						<BookItemBorrowedAdmin
							key={book_item_id}
							bookItemId = {book_item_id}
							userName={userName}
							userSurname={userName}
							userEmail={`${userName}@gmail.com`}
							bookTitle={title}
							setCount={handleState}
						/>
					))}
			</ul>
		</div>
	);
};
