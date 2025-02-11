import { useQuery } from '@apollo/client';

import { GET_COUNTRIES } from '../../Queries/getCountries';

export const useGetCountries = () => {
  const { loading, error, data = [] } = useQuery(GET_COUNTRIES);

  return {
    data,
    loading,
    error,
  };
};
