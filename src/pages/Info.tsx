import React from 'react';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Layout from '../Components/Layout';

const Info = () => {
  return (
    <Layout>
      <Typography variant="h5">Eugene's Information</Typography>
      <Typography variant="body1">
        <strong>Full Name:</strong> Eugene Vilder
        <br />
        <strong>Description:</strong> Home assignment for the Monte Carlo project, designed to showcase the integration of various technologies and tools for efficient workflows and systems. The assignment includes developing web applications with React, Apollo GraphQL, and Material-UI, tailored for practical use cases and modern user experiences.
        <br />
        <strong>Email:</strong> vilder.eugene@gmail.com
        <br />
        <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/vildereugene/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/vildereugene/</a>
      </Typography>
      <Link to="/">
        <Button variant="contained">Back to Home</Button>
      </Link>
    </Layout>
  );
};

export default Info;
