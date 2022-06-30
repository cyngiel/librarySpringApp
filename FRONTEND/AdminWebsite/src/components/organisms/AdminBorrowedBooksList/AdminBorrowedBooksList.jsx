import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BookItemBorrowedAdmin } from '../BookItemBorrowedAdmin/BookItemBorrowedAdmin';
import styles from './AdminBorrowedBooksList.module.scss';

export const AdminBorrowedBooksList = () => {
	const { seatchWord } = useSelector((state) => state.search);
	const [booksList, setBookList] = useState([]);
	const [countState, setCountState] = useState(false);
	const handleState = () => setCountState((prev) => !prev);

	useEffect(() => {
		(async () => {
			const res = await fetch('http://localhost:8080/book/borrow/all', {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('AuthorizationAdmin')}`,
				},
			});
			const bookData = await res.json();
			setBookList(bookData);
		})();
	}, [countState]);
	return (
		<div className={styles.listWrapper}>
			<ul className={styles.bookList}>
				<li className={styles.bookItemHeader}>
					<p className={styles.userID}>Email</p>
					<p className={styles.bookCatalogNum}>Book title</p>
					<p className={styles.bookDate}>Reservation</p>
					<p className={styles.bookDate}>Deadline</p>
					<p className={styles.bookCatalogNum}>Action</p>
				</li>
				{booksList
					.filter((book) => book.title.includes(seatchWord))
					.map(
						({
							book_item_id,
							email,
							title,
							date,
						}) => (
							<BookItemBorrowedAdmin
								key={book_item_id}
								bookItemId={book_item_id}
								userEmail={email}
								bookTitle={title}
								reservationDate={date}
								deadline={date}
								setCount={handleState}
							/>
						)
					)}
			</ul>
		</div>
	);
};
