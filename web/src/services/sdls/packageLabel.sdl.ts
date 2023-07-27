export const CREATE_PACKAGE_MUTATION = gql`
  mutation CreatePackageLabel($input: CreatePackageLabelInput!) {
    createPackageLabel(input: $input) {
      id
      filename
      createdAt
      fileUrl
    }
  }
`

export const GET_PACKAGES_BY_USER = gql`
  query GetPackagesByUser($userId: String!) {
    packageLabels(userId: $userId) {
      id
      filename
      createdAt
      fileUrl
      version
    }
  }
`

export const GET_PACKAGE_LABEL_BY_FILENAME = gql`
  query GetPackageLabelByNameAndHash($filename: String!, $hash: String!) {
    getPackageLabelByNameAndHash(filename: $filename, hash: $hash) {
      id
      version
      hash
    }
  }
`
