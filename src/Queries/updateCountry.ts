import gql from 'graphql-tag';

// GraphQL mutation to update country
export const UPDATE_COUNTRY = gql`
  mutation UpdateCountry(
    $code: ID!
    $name: String!
    $native: String!
    $capital: String!
    $currency: String!
  ) {
    updateCountry(
      code: $code
      name: $name
      native: $native
      capital: $capital
      currency: $currency
    ) {
      name
      native
      capital
      currency
    }
  }
`;
