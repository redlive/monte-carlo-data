import {
  TextField,
  Button,
  Typography,
  CircularProgress,
  Box,
} from '@mui/material';
import { useMutation } from '@apollo/client';

import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Layout from '../Components/Layout';
import { useGetCountry } from '../Hooks';
import { UPDATE_COUNTRY } from '../Queries/updateCountry';

const CountryEdit: React.FC = () => {
  const { code = '' } = useParams<{ code: string }>();

  const navigate = useNavigate();
  const { data, loading, error } = useGetCountry(code);

  const [updateCountry, { loading: updateLoading }] =
    useMutation(UPDATE_COUNTRY);

  const [formData, setFormData] = useState({
    name: '',
    native: '',
    capital: '',
    currency: '',
  });

  if (loading) {
    return <CircularProgress />;
  }

  if (data && !formData.name) {
    setFormData({
      name: data.country.name,
      native: data.country.native,
      capital: data.country.capital,
      currency: data.country.currency,
    });
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await updateCountry({
        variables: { ...formData, code },
      });
      navigate(`/details/${code}`); // Redirect back to the country details page
    } catch (e) {
      alert('Unfortunately, this GQL sanbox does not allow to run mutations');
    }
  };

  if (loading) return <CircularProgress />;
  if (error)
    return <Typography color="error">Error: {error.message}</Typography>;

  return (
    <Layout>
      <Box component="form" onSubmit={handleSubmit}>
        <Typography variant="h5">Edit Country</Typography>

        <TextField
          label="Country Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Native Name"
          name="native"
          value={formData.native}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Capital"
          name="capital"
          value={formData.capital}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Currency"
          name="currency"
          value={formData.currency}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />

        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={updateLoading}
        >
          {updateLoading ? 'Updating...' : 'Save Changes'}
        </Button>
      </Box>
    </Layout>
  );
};

export default CountryEdit;
