import styles from './MenuItem.module.scss'

export const MenuItem = ({children}) => {
  return (
    <li className={styles.navMenuItem}>{children}</li>
  )
}