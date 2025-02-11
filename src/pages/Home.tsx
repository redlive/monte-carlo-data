import { Button, CircularProgress, Typography } from '@mui/material';

import Layout from '../Components/Layout';

import { Link } from 'react-router';
import { useGetCountries } from '../Hooks';

const Home: React.FC  = () => {
  const { loading, error, data = [] } = useGetCountries();
  const { countries = [] } = data;

  if (loading) return <CircularProgress />;
  if (error)
    return <Typography color="error">Error: {error.message}</Typography>;

  return (
    <Layout>
      <Typography variant="h6">List of Countries:</Typography>
      <ul>
        {countries?.map((country: { code: string; name: string }) => (
          <li key={country.code}>
            <Link to={`/details/${country.code}`}>
              <strong>{country.name}</strong> ({country.code})
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Home;
