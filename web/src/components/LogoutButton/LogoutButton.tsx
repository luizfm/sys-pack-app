import { useAuth } from 'src/auth'

import styles from './styles.module.scss'

const LogoutButton = () => {
  const { logOut } = useAuth()

  return (
    <button className={styles['c-logout-button']} onClick={logOut}>
      Logout
    </button>
  )
}

export default LogoutButton
