import { ArticlesList } from '../../components/organisms/ArticlesList/ArticlesList';
import styles from './HomeView.module.scss';
export const HomeView = () => {
	return (
		<>
			<h2 className={styles.title}>News</h2>
			<ArticlesList />
		</>
	);
};
