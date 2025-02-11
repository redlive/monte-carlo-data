import gql from "graphql-tag";

// GraphQL query to fetch a list of countries
export const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      code
      name
    }
  }
`;