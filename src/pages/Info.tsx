import React from 'react';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Layout from '../Components/Layout';

const Info = () => {
  return (
    <Layout>
      <Typography variant="h5">Information Page</Typography>
      <Typography variant="body1">
        This is a simple example of using Apollo Client and Material-UI.
      </Typography>
      <Link to="/">
        <Button variant="contained">Back to Home</Button>
      </Link>
    </Layout>
  );
};

export default Info;
