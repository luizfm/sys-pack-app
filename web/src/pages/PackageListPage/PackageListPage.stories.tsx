import type { ComponentMeta } from '@storybook/react'

import PackageListPage from './PackageListPage'

export const generated = () => {
  return <PackageListPage />
}

export default {
  title: 'Pages/PackageListPage',
  component: PackageListPage,
} as ComponentMeta<typeof PackageListPage>
