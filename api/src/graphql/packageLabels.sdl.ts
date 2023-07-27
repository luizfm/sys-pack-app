export const schema = gql`
  type PackageLabel {
    id: String!
    filename: String!
    hash: String!
    createdAt: DateTime!
    fileUrl: String!
    user: User!
    userId: String!
    version: Int!
  }

  type Query {
    packageLabels(userId: String!): [PackageLabel!]! @requireAuth
    packageLabel(id: String!): PackageLabel @requireAuth
    getPackageLabelByNameAndHash(
      filename: String!
      hash: String!
    ): PackageLabel @requireAuth
  }

  input CreatePackageLabelInput {
    filename: String!
    userId: String!
    hash: String!
  }

  input UpdatePackageLabelInput {
    filename: String
    hash: String
    fileUrl: String
    userId: String
  }

  type Mutation {
    createPackageLabel(input: CreatePackageLabelInput!): PackageLabel!
      @requireAuth
    updatePackageLabel(
      id: String!
      input: UpdatePackageLabelInput!
    ): PackageLabel! @requireAuth
    deletePackageLabel(id: String!): PackageLabel! @requireAuth
  }
`
