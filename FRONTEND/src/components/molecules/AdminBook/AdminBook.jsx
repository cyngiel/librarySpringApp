import PropTypes from 'prop-types';
import styles from './AdminBook.module.scss';

export const AdminBook = ({
	person,
	personID,
	title,
	catalog_number,
	rental,
	deadline,
	bookStatus,
}) => {
	return (
		<li className={styles.bookItem}>
			<p className={styles.personID}>{personID}</p>
			<p className={styles.personName}>{person}</p>
			<p className={styles.bookTitle}>{title}</p>
			<p className={styles.bookID}>{catalog_number}</p>
			<p className={styles.bookDate}>{rental}</p>
			<p className={styles.bookDate}>{deadline}</p>
			<p className={styles.bookStatus}>{bookStatus}</p>
			<div className={styles.buttons}>
				<button className={styles.button}>Rezrw</button>
				<button className={styles.button}>Wypo</button>
				<button className={styles.button}>Odda</button>
			</div>
		</li>
	);
};

AdminBook.propTypes = {
	person: PropTypes.string,
	personID: PropTypes.string,
	title: PropTypes.string,
	catalog_number: PropTypes.number,
	rental: PropTypes.string,
	deadline: PropTypes.string,
	bookStatus: PropTypes.string,
};
