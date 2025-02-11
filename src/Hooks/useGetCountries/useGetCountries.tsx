import { useQuery } from '@apollo/client';
import { GET_COUNTRIES } from '../../Queries/getCountries';
import { Country } from '../../Types/country';

type CountriesData = {
  countries: Country[];
};

// The idea behind this hook is to detach Component
// from its data service. Basically, if tmr will be a need
// to change data source, the change will be done here, not in
// the actual Component. Meanning component stays indepedent.
export const useGetCountries = () => {
  const { loading, error, data } = useQuery<CountriesData>(GET_COUNTRIES);

  return {
    data: {
      countries: [],
      ...data,
    },
    loading,
    error,
  };
};
