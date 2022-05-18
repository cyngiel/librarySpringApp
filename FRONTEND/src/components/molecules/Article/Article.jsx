import styles from './Article.module.scss'
import { Title } from '../../atoms/Title/Title'
import { Contetn } from '../../atoms/Contetn/Contetn'

import PropTypes from 'prop-types'

export const Article = ({articleData: {title, contetn}}) => {
  return (
    <article className={styles.article}>
      <Title>{title}</Title>
      <Contetn>{contetn}</Contetn>
    </article>
  )
}

Article.propTypes = {
  articleData: PropTypes.shape({
    title: PropTypes.string,
    contetn: PropTypes.string,
  })
}