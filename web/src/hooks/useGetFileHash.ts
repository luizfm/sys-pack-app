import { useState } from 'react'

import MD5 from 'crypto-js/md5'

export const useGetFileHash = ({ file }) => {
  const [fileHash, setFileHash] = useState('')

  const fileReader = new FileReader()

  fileReader.onload = (event) => {
    const binary = event.target.result
    const md5 = MD5(binary).toString()
    setFileHash(md5)
  }

  if (file) {
    fileReader.readAsBinaryString(file)
  }

  return fileHash
}
