import type { PackageLabel } from '@prisma/client'

import {
  packageLabels,
  packageLabel,
  createPackageLabel,
  updatePackageLabel,
  deletePackageLabel,
} from './packageLabels'
import type { StandardScenario } from './packageLabels.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('packageLabels', () => {
  scenario('returns all packageLabels', async (scenario: StandardScenario) => {
    const result = await packageLabels()

    expect(result.length).toEqual(Object.keys(scenario.packageLabel).length)
  })

  scenario(
    'returns a single packageLabel',
    async (scenario: StandardScenario) => {
      const result = await packageLabel({ id: scenario.packageLabel.one.id })

      expect(result).toEqual(scenario.packageLabel.one)
    }
  )

  scenario('creates a packageLabel', async (scenario: StandardScenario) => {
    const result = await createPackageLabel({
      input: {
        filename: 'String',
        hash: 'String',
        fileUrl: 'String',
        userId: scenario.packageLabel.two.userId,
      },
    })

    expect(result.filename).toEqual('String')
    expect(result.hash).toEqual('String')
    expect(result.fileUrl).toEqual('String')
    expect(result.userId).toEqual(scenario.packageLabel.two.userId)
  })

  scenario('updates a packageLabel', async (scenario: StandardScenario) => {
    const original = (await packageLabel({
      id: scenario.packageLabel.one.id,
    })) as PackageLabel
    const result = await updatePackageLabel({
      id: original.id,
      input: { filename: 'String2' },
    })

    expect(result.filename).toEqual('String2')
  })

  scenario('deletes a packageLabel', async (scenario: StandardScenario) => {
    const original = (await deletePackageLabel({
      id: scenario.packageLabel.one.id,
    })) as PackageLabel
    const result = await packageLabel({ id: original.id })

    expect(result).toEqual(null)
  })
})
