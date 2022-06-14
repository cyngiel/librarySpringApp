import styles from './Article.module.scss';

import PropTypes from 'prop-types';

export const Article = ({ articleData: { title, content } }) => {
	return (
		<article className={styles.article}>
			<h2 className={styles.title}>{title}</h2>
			<p className={styles.content}>{content}</p>
		</article>
	);
};

Article.propTypes = {
	articleData: PropTypes.shape({
		title: PropTypes.string,
		content: PropTypes.string,
	}),
};
