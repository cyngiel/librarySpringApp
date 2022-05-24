import styles from './ArticlesList.module.scss';
import { articlesData } from '../../../data/articles';
import { Article } from '../../molecules/Article/Article';
export const ArticlesList = () => {
  return (
    <section className={styles.booksContainer} >
      {articlesData.map(article => <Article key={article.title} articleData={article}></Article>)}
    </section>
  )
}

