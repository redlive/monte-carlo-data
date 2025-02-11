import gql from 'graphql-tag';

export const GET_COUNTRY = gql`
  query GetCountry($code: ID!) {
    country(code: $code) {
      name
      native
      capital
      currency
      languages {
        code
        name
      }
      continent {
        name
      }
    }
  }
`;
