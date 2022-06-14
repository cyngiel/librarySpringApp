import { UserReservedBooksList } from '../../components/organisms/UserReservedBooksList/UserReservedBooksList';
import styles from './UserBookReservedView.module.scss';

export const UserBookReservedView = () => {
	return (
		<>
			<h2 className={styles.title}>Reserved books</h2>
			<UserReservedBooksList />
		</>
	);
};
