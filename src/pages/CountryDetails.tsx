import { useParams, Link } from 'react-router-dom';

import Layout from '../Components/Layout';
import { Typography, CircularProgress, Box, Button } from '@mui/material';
import { useGetCountry } from '../Hooks';

const CountryDetails: React.FC = () => {
  const { code = '' } = useParams<{ code: string }>();
  const { loading, error, data } = useGetCountry(code);

  if (loading) return <CircularProgress />;
  if (error)
    return <Typography color="error">Error: {error.message}</Typography>;

  const country = data?.country;

  return (
    <Layout>
      {country ? (
        <Box>
          <Typography variant="h4">{country.name}</Typography>
          <Typography variant="h6">Native Name: {country.native}</Typography>
          <Typography variant="h6">Capital: {country.capital}</Typography>
          <Typography variant="h6">Currency: {country.currency}</Typography>
          <Typography variant="h6">
            Continent: {country.continent.name}
          </Typography>
          <Typography variant="h6">Languages:</Typography>
          <ul>
            {country.languages.map((language: { name: string }) => (
              <li key={language.name}>{language.name}</li>
            ))}
          </ul>

          <Link to={`/details/${code}/edit`} style={{ textDecoration: 'none' }}>
            <Button variant="contained">Edit Country</Button>
          </Link>
        </Box>
      ) : (
        <Typography>No country found</Typography>
      )}
    </Layout>
  );
};

export default CountryDetails;
