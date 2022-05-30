import { UserBook } from '../../components/molecules/UserBook/UserBook';
import { userBooksData } from '../../data/userBooksData';

import styles from './UserBooksView.module.scss';

export const UserBooksView = () => {
	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>User's book list</h2>
			<div className={styles.listWrapper}>
				<ul className={styles.bookList}>
					<li className={styles.bookItem}>
						<p className={styles.bookTitle}>Title</p>
						<p className={styles.bookAuthor}>Author</p>
						<p className={styles.bookDate}>Book rental</p>
						<p className={styles.bookDate}>Deadline</p>
						<p className={styles.bookStatus}>Status </p>
					</li>
					{userBooksData.map(
						({ id, title, author, bookStatus, deadline, rental }) => (
							<UserBook
								key={id}
								id={id}
								title={title}
								author={author}
								deadline={deadline}
								rental={rental}
								bookStatus={bookStatus}
							/>
						)
					)}
				</ul>
			</div>
		</div>
	);
};
