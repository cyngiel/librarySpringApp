import styles from './SearchBookInput.module.scss'

export const SearchBookInput = () => {
  return (
    <input
    type='text'
    className={styles.searchInput}
    name='search'
    id='search'
  />
  )
}