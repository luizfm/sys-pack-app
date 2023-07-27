import { PackageLabel } from 'types/graphql'

import { MetaTags, useQuery } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import { Spinner } from 'src/components/Spinner/Spinner'
import { GET_PACKAGES_BY_USER } from 'src/services/sdls/packageLabel.sdl'
import { dateFormatter } from 'src/utils/date-formatter'

import styles from './styles.module.scss'

const PackageListPage = () => {
  const { currentUser } = useAuth()
  const { data, loading } = useQuery(GET_PACKAGES_BY_USER, {
    variables: {
      userId: currentUser.id,
    },
  })

  if (loading) {
    return (
      <div className={styles['c-package-list__body']}>
        <Spinner />
      </div>
    )
  }

  return (
    <section className={styles['c-package-list']}>
      <MetaTags title="PackageList" description="PackageList page" />

      <h1 className={styles['c-package-list__title']}>Package List</h1>
      <table className={styles['c-package-list__table']}>
        <thead className={styles['c-package-list__table__header']}>
          <tr>
            <th className={styles['c-package-list__table__header__cell']}>
              Small image preview
            </th>
            <th className={styles['c-package-list__table__header__cell']}>
              Filename
            </th>

            <th className={styles['c-package-list__table__header__cell']}>
              Version
            </th>
            <th className={styles['c-package-list__table__header__cell']}>
              Created at
            </th>
            <th className={styles['c-package-list__table__header__cell']}>
              File url
            </th>
          </tr>
        </thead>
        <tbody className={styles['c-package-list__table__body']}>
          {data?.packageLabels?.map((pack: PackageLabel) => (
            <tr key={pack.id}>
              <td className={styles['c-package-list__table__body__cell']}>
                <img
                  src={pack.fileUrl}
                  alt=""
                  className={styles['c-package-list__table__body__image']}
                />
              </td>
              <td className={styles['c-package-list__table__body__cell']}>
                <span>{pack.filename}</span>
              </td>
              <td className={styles['c-package-list__table__body__cell']}>
                <span>{pack.version}</span>
              </td>
              <td className={styles['c-package-list__table__body__cell']}>
                <span>{dateFormatter(new Date(pack.createdAt))}</span>
              </td>
              <td className={styles['c-package-list__table__body__cell']}>
                <a href={pack.fileUrl} target="_blank" rel="noreferrer">
                  Open in a new tab
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default PackageListPage
