import { MetaTags } from '@redwoodjs/web'

import UploadForm from 'src/components/UploadForm/UploadForm'

import styles from './styles.module.scss'

const DashboardPage = () => {
  return (
    <section className={styles['c-dashboard']}>
      <MetaTags title="Dashboard" description="Dashboard page" />

      <h1 className={styles['c-dashboard__title']}>Upload files</h1>
      <p className={styles['c-dashboard__description']}>
        Upload your files below by using drag and drop or choosen a file
        manually.
      </p>
      <UploadForm />
    </section>
  )
}

export default DashboardPage
