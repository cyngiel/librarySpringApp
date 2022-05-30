import { AdminBook } from '../../components/molecules/AdminBook/AdminBook';
import styles from './AdminBooksView.module.scss';
import { adminBooksData } from '../../data/adminBooksData';

export const AdminBooksView = () => {
	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>AdminBookList</h2>
			<div className={styles.listWrapper}>
				<ul className={styles.bookList}>
					<li className={styles.bookItem}>
						<p className={styles.personName}>Person Name</p>
						<p className={styles.personID}>Person ID</p>
						<p className={styles.bookTitle}>Title</p>
						<p className={styles.bookID}>Catalog ID</p>
						<p className={styles.bookDate}>Book rental</p>
						<p className={styles.bookDate}>Deadline</p>
						<p className={styles.bookStatus}>Status </p>
						<p className={styles.bookStatus}>Change satus</p>
					</li>
					{adminBooksData.map(
						({
							person,
							personID,
							title,
							catalog_number,
							rental,
							deadline,
							bookStatus,
						}) => (
							<AdminBook
								key={personID + catalog_number}
								person={person}
								personID={personID}
								title={title}
								catalog_number={catalog_number}
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
