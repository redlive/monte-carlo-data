import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import Home from './pages/Home';
import Info from './pages/Info';
import client from './apolloClient';
import CountryDetails from './pages/CountryDetails';
import CountryEdit from './pages/CountryEdit';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/details/:code" element={<CountryDetails />} />
          <Route path="/details/:code/edit" element={<CountryEdit />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
};

export default App;
