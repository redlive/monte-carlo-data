import { useQuery } from '@apollo/client';

import { GET_COUNTRY } from '../../Queries/getCountry';

// The idea behind this hook is to detach Component
// from its data service. Basically, if tmr will be a need
// to change data source, the change will be done here, not in
// the actual Component. Meanning component stays indepedent.
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
