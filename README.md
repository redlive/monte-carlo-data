Here’s the actual `README.md` file content based on your project details:

```markdown
# Monte Carlo Data

## Description

**Monte Carlo Data** is a React application designed to manage and query country-related data using Apollo Client and GraphQL. The project includes TypeScript for strong typing, Jest for testing, and Prettier for consistent code formatting. It utilizes Material UI for UI components and various testing utilities to ensure high-quality code.

## Features

- GraphQL API integration using Apollo Client
- Material UI for UI components
- TypeScript for static typing
- Jest for unit and integration tests
- Prettier for code formatting
- React Router for routing
- Custom hooks to interact with the backend API
- Testing using React Testing Library and Jest

## Installation

To get started with the project, clone the repository and install the dependencies:

```bash
git clone git@github.com:redlive/monte-carlo-data.git
cd monte-carlo-data
yarn install
```

## Available Scripts

- **`start`**: Starts the development server.
    ```bash
    yarn start
    ```
  
- **`dev`**: Starts the development server with `nodemon` for automatic server restart.
    ```bash
    yarn dev
    ```

- **`test`**: Runs Jest tests with the development environment.
    ```bash
    yarn test
    ```

- **`format`**: Formats the entire project using Prettier.
    ```bash
    yarn format
    ```

## Dependencies

- **NodeJS**: Version 20
- **@apollo/client**: GraphQL client for data fetching
- **@emotion/react**, **@emotion/styled**: CSS-in-JS library for styling components
- **@mui/material**: Material UI library for React components
- **graphql**: GraphQL JavaScript implementation
- **react**: JavaScript library for building user interfaces
- **react-dom**: React package for DOM rendering
- **react-router-dom**: Declarative routing for React
- **typescript**: Static typing for JavaScript
- **jest**: JavaScript testing framework
- **jest-environment-jsdom**: Jest environment for simulating a browser-like environment for testing

## Development Dependencies

- **@testing-library/react-hooks**: Utility for testing custom React hooks
- **jest-mock**: Utility for creating mock functions for Jest
- **jsdom**: JavaScript DOM implementation used in testing
- **prettier**: Code formatter for consistent code style
- **ts-jest**: TypeScript preprocessor for Jest

## Configuration

### ESLint

This project extends the default `react-app` and `react-app/jest` configurations from ESLint for linting JavaScript/TypeScript files.

### Jest

Jest is configured with `ts-jest` for transforming TypeScript files and uses the `jsdom` environment for running tests in a simulated browser environment.

### Prettier

Prettier is used for automatic code formatting. You can run the following command to format the code:

```bash
yarn format
```

### Browserslist

The project supports modern browsers and defines which browsers to target for production and development environments.

- **Production**: Target browsers with more than 0.2% global usage and avoid dead browsers.
- **Development**: Supports the last version of Chrome, Firefox, and Safari.

## Testing

This project uses Jest and React Testing Library to test the application.

### Running Tests

To run the tests, use the following command:

```bash
yarn test
```

Tests are configured to run in the `jsdom` environment, which simulates a browser for testing React components.

```