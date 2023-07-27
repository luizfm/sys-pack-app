import * as Avatar from '@radix-ui/react-avatar'

import { useAuth } from 'src/auth'

import DropdownMenu from '../DropdownMenu/DropdownMenu'
import LogoutButton from '../LogoutButton/LogoutButton'

import styles from './styles.module.scss'

const dropdownItems = [
  {
    label: 'logout',
    component: <LogoutButton />,
  },
]

const UserMenu = () => {
  const { currentUser } = useAuth()
  const { name } = currentUser

  return (
    <div className={styles['c-user-menu']}>
      <Avatar.Root className={styles['c-user-menu__avatar-root']}>
        <Avatar.Image
          className={styles['c-user-menu__avatar-image']}
          src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
          alt={name}
        />
        <Avatar.Fallback
          className={styles['c-user-menu__avatar-fallback']}
          delayMs={600}
        >
          {name.charAt(0).toLocaleUpperCase()}
        </Avatar.Fallback>
      </Avatar.Root>
      <DropdownMenu items={dropdownItems} />
    </div>
  )
}

export default UserMenu
