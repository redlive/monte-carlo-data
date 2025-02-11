import React, { ReactNode } from 'react';
import { Container, AppBar, Toolbar, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      {/* AppBar as the header */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Monte Carlo Data
          </Typography>
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
              marginRight: '15px',
            }}
          >
            Home
          </Link>
          <Link to="/info" style={{ color: 'white', textDecoration: 'none' }}>
            Info
          </Link>
        </Toolbar>
      </AppBar>

      {/* Main content area */}
      <Container sx={{ marginTop: '20px' }}>
        <Box>{children}</Box>
      </Container>
    </div>
  );
};

export default Layout;
