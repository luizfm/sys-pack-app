import { IFileWithMeta } from 'react-dropzone-uploader'
import { CreatePackageLabelInput, PackageLabel } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useQuery } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { api } from 'src/api'
import { GET_PACKAGE_LABEL_BY_FILENAME } from 'src/services/sdls/packageLabel.sdl'

type UserProps = {
  id: string
  name: string
}

type QueryReturnType = QueryOperationResult<
  PackageLabel,
  {
    filename: string
    hash: string
  }
>

type CallbackProps = {
  variables: {
    input: CreatePackageLabelInput
  }
}

type UseUploadFilesHookProps = {
  files: IFileWithMeta[]
  callback: (variables: CallbackProps) => void
  user: UserProps
  fileHash: string
}

export const useUploadFiles = ({
  files,
  callback,
  user,
  fileHash,
}: UseUploadFilesHookProps): QueryReturnType => {
  const uploadedFile = files[0]

  const query = useQuery(GET_PACKAGE_LABEL_BY_FILENAME, {
    variables: {
      filename: `${user.id}/${uploadedFile?.file?.name}`,
      hash: fileHash,
    },
    skip: true,
    onCompleted: async (data) => {
      if (data?.getPackageLabelByNameAndHash?.hash === fileHash) {
        toast.error(
          'There is a file with same name and hash. Are you trying to upload a duplicated file?'
        )

        return
      }

      toast.success("We're uploading your image. Hold on a second")

      const fileVersion = (data?.getPackageLabelByNameAndHash?.version ?? 0) + 1
      const filename = `${uploadedFile.file.name}-v${fileVersion}`

      const response = await api.get(
        process.env.REDWOOD_ENV_S3_PRE_SIGNED_URL,
        {
          params: {
            filename: `${user.id}/${filename}`,
          },
        }
      )

      await fetch(response.data.uploadURL, {
        method: 'PUT',
        body: uploadedFile['file'],
      })

      callback({
        variables: {
          input: {
            filename: `${user.id}/${uploadedFile?.file?.name}`,
            userId: user.id,
            hash: fileHash,
          },
        },
      })

      toast.success(
        'A new file has been upload. You will be redirected to List of Packages'
      )

      setTimeout(() => {
        navigate(routes.packageList())
      }, 3000)
    },
  })

  return query
}
