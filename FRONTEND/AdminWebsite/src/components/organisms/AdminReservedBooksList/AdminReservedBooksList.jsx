import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BookItemReservedAdmin } from '../BookItemReservedAdmin/BookItemReservedAdmin';
import styles from './AdminReservedBooksList.module.scss';

export const AdminReservedBooksList = () => {
	const { seatchWord } = useSelector((state) => state.search);
	const [booksList, setBookList] = useState([]);
	const [countState, setCountState] = useState(false);

	// useEffect(() => {
	// 	(async () => {
	// 		const res = await fetch('http://localhost:8080/book/all');
	// 		const bookData = await res.json()
	// 		setBookList(bookData)
	// 	})()
	// }, [])
	const handleState = () => setCountState((prev) => !prev);
	useEffect(() => {
		(async () => {
			const res = await fetch('http://localhost:8080/book/reserve/all');
			const bookData = await res.json();
			setBookList(bookData);
		})();
	}, [countState]);

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
					.map(
						({
							book_item_id,
							book_id: userId,
							author: userName,
							items,
							title,
						}) => (
							<BookItemReservedAdmin
								key={book_item_id}
								bookItemId={book_item_id}
								userName={userName}
								userSurname={userName}
								userEmail={`${userName}@gmail.com`}
								bookTitle={title}
								setCount={handleState}
							/>
						)
					)}
			</ul>
		</div>
	);
};
