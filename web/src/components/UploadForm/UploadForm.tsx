import { useEffect, useState } from 'react'

import Dropzone, { IFileWithMeta } from 'react-dropzone-uploader'
import 'react-dropzone-uploader/dist/styles.css'

import { useMutation } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import { useGetFileHash } from 'src/hooks/useGetFileHash'
import { useUploadFiles } from 'src/hooks/useUpload'
import { CREATE_PACKAGE_MUTATION } from 'src/services/sdls/packageLabel.sdl'

import { dropZoneStyles, restComponentProps } from './dropzone-styles'

const UploadForm = () => {
  const [createPackageMutation] = useMutation(CREATE_PACKAGE_MUTATION)
  const { currentUser } = useAuth()
  const [files, setFiles] = useState<IFileWithMeta[]>([])
  const fileHash = useGetFileHash({ file: files[0]?.file })

  const { refetch } = useUploadFiles({
    callback: createPackageMutation,
    fileHash,
    user: currentUser,
    files,
  })

  const handleSubmit = async (files) => setFiles(files)

  const getUploadParams = () => {
    return { url: 'https://httpbin.org/post' }
  }

  const handleChangeStatus = (_: IFileWithMeta, status: string) => {
    if (status === 'removed') {
      setFiles([])
    }
  }

  useEffect(() => {
    if (fileHash && files.length > 0) {
      refetch()
    }
  }, [fileHash, files.length, refetch])

  return (
    <>
      <Dropzone
        getUploadParams={getUploadParams}
        onSubmit={handleSubmit}
        onChangeStatus={handleChangeStatus}
        maxFiles={1}
        multiple={false}
        styles={{
          dropzone: {
            ...dropZoneStyles,
            flexDirection: 'column',
          },
          ...restComponentProps,
        }}
      />
    </>
  )
}

export default UploadForm
