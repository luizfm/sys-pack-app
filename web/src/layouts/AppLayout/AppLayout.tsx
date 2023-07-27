import { Toaster } from '@redwoodjs/web/dist/toast'

import Header from 'src/components/Header/Header'

import styles from './styles.module.scss'

type AppLayoutProps = {
  children?: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className={styles['c-app-layout']}>
      <Toaster />
      <Header />
      <main className={styles['c-app-layout__main']}>{children}</main>
    </div>
  )
}

export default AppLayout
