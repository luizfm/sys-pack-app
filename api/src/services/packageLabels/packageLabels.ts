import type {
  QueryResolvers,
  MutationResolvers,
  PackageLabelRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const packageLabels: QueryResolvers['packageLabels'] = ({ userId }) => {
  return db.packageLabel.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })
}

export const packageLabel: QueryResolvers['packageLabel'] = ({ id }) => {
  return db.packageLabel.findUnique({
    where: { id },
  })
}

export const getPackageLabelByNameAndHash: QueryResolvers['getPackageLabelByNameAndHash'] =
  async ({ filename, hash }) => {
    const fileWithSameNameAndHash = await db.packageLabel.findFirst({
      where: { filename, hash },
    })

    if (fileWithSameNameAndHash) {
      return fileWithSameNameAndHash
    }

    const fileWithSameName = await db.packageLabel.findMany({
      where: { filename },
    })

    return fileWithSameName.at(-1)
  }

export const createPackageLabel: MutationResolvers['createPackageLabel'] =
  async ({ input }) => {
    const filesWithSameName = await db.packageLabel.findMany({
      where: {
        filename: input.filename,
      },
    })

    if (filesWithSameName.length === 0) {
      return db.packageLabel.create({
        data: {
          ...input,
          version: 1,
          fileUrl: `https://${process.env.REDWOOD_ENV_BUCKET_NAME}.s3.${process.env.REDWOOD_ENV_BUCKET_REGION}.amazonaws.com/${input.filename}-v1`,
        },
      })
    }

    if (filesWithSameName.some((file) => file.hash === input.hash)) return

    const lastFileVersion = filesWithSameName.at(-1)
    const newFileVersion = lastFileVersion.version + 1

    return db.packageLabel.create({
      data: {
        ...input,
        version: newFileVersion,
        fileUrl: `https://${process.env.REDWOOD_ENV_BUCKET_NAME}.s3.${process.env.REDWOOD_ENV_BUCKET_REGION}.amazonaws.com/${input.filename}-v${newFileVersion}`,
      },
    })
  }

export const updatePackageLabel: MutationResolvers['updatePackageLabel'] = ({
  id,
  input,
}) => {
  return db.packageLabel.update({
    data: input,
    where: { id },
  })
}

export const deletePackageLabel: MutationResolvers['deletePackageLabel'] = ({
  id,
}) => {
  return db.packageLabel.delete({
    where: { id },
  })
}

export const PackageLabel: PackageLabelRelationResolvers = {
  user: (_obj, { root }) => {
    return db.packageLabel.findUnique({ where: { id: root?.id } }).user()
  },
}
