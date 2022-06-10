import styles from './ArticlesList.module.scss';
import { Article } from '../../molecules/Article/Article';
import { useState } from 'react';
import { useEffect } from 'react';

export const ArticlesList = () => {
	const [articles, setArticles] = useState([{ title: '', content: '' }]);

	useEffect(() => {
		(async () => {
			const res = await fetch('http://localhost:8080/news/all');
			const articleData = await res.json();
			setArticles(articleData);
			console.log(articleData);
		})();
	}, []);

	return (
		<section className={styles.booksContainer}>
			{articles.length > 0 ? (
				articles.map((article) => (
					<Article key={article.title} articleData={article}></Article>
				))
			) : (
				<h2>Brak</h2>
			)}
		</section>
	);
};
