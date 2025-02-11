import { useQuery } from '@apollo/client';

import { GET_COUNTRY } from '../../Queries/getCountry';

export const useGetCountry = (code: string) => {
  const {
    loading,
    error,
    data = [],
  } = useQuery(GET_COUNTRY, {
    variables: {
      code,
    },
  });

  return {
    data,
    loading,
    error,
  };
};
