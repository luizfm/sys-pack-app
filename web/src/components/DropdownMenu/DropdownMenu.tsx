import React from 'react'

import { List } from '@phosphor-icons/react'
import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu'

import styles from './styles.module.scss'

type DropdownItemsProps = {
  label: string
  component: React.ReactNode
}

type DropdownMenuProps = {
  items: DropdownItemsProps[]
}

const DropdownMenu = ({ items }: DropdownMenuProps) => {
  return (
    <RadixDropdownMenu.Root>
      <RadixDropdownMenu.Trigger asChild>
        <button className={styles['c-dropdown-menu__button']}>
          <List size={24} weight="bold" />
        </button>
      </RadixDropdownMenu.Trigger>

      <RadixDropdownMenu.Portal>
        <RadixDropdownMenu.Content
          align="end"
          sideOffset={8}
          className={styles['c-dropdown-menu__content']}
        >
          {items.map((item) => (
            <React.Fragment key={item.label}>
              <RadixDropdownMenu.Item>{item.component}</RadixDropdownMenu.Item>
            </React.Fragment>
          ))}
        </RadixDropdownMenu.Content>
      </RadixDropdownMenu.Portal>
    </RadixDropdownMenu.Root>
  )
}

export default DropdownMenu
