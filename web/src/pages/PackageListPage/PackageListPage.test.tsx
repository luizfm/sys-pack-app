import { render } from '@redwoodjs/testing/web'

import PackageListPage from './PackageListPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PackageListPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PackageListPage />)
    }).not.toThrow()
  })
})
