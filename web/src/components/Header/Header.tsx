import { Link, routes } from '@redwoodjs/router'

import UserMenu from '../UserMenu/UserMenu'

import styles from './styles.module.scss'

const Header = () => {
  return (
    <header className={styles['c-header__header']}>
      <nav className={styles['c-header__nav']}>
        <div className={styles['c-header__links']}>
          <Link to={routes.dashboard()} className={styles['c-header__link']}>
            Dashboard
          </Link>
          <Link to={routes.packageList()} className={styles['c-header__link']}>
            List of packages
          </Link>
        </div>

        <UserMenu />
      </nav>
    </header>
  )
}

export default Header
