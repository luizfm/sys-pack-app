import type { Prisma, PackageLabel } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PackageLabelCreateArgs>({
  packageLabel: {
    one: {
      data: {
        filename: 'String',
        hash: 'String',
        fileUrl: 'String',
        user: {
          create: {
            name: 'String',
            email: 'String7718801',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
        filename: 'String',
        hash: 'String',
        fileUrl: 'String',
        user: {
          create: {
            name: 'String',
            email: 'String743240',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<PackageLabel, 'packageLabel'>
