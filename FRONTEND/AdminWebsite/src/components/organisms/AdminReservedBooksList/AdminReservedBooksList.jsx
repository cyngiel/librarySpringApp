import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BookItemReservedAdmin } from '../BookItemReservedAdmin/BookItemReservedAdmin';
import styles from './AdminReservedBooksList.module.scss';

export const AdminReservedBooksList = () => {
	const { seatchWord } = useSelector((state) => state.search);
	const [booksList, setBookList] = useState([]);
	const [countState, setCountState] = useState(false);

	const handleState = () => setCountState((prev) => !prev);
	useEffect(() => {
		(async () => {
			const res = await fetch('http://localhost:8080/book/reserve/all', {
				method: 'GET',
				headers: {
					'Authorization': `Bearer ${localStorage.getItem('Authorization')}`,
				},
			});
			const bookData = await res.json();
			setBookList(bookData);
		})();
	}, [countState]);

	console.log(booksList)
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
				{booksList.map(
						({
							book_item_id,
							book_id: userId,
							author: userName,
							email,
							title,
							date,
						}) => (
							<BookItemReservedAdmin
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
