// frontend/src/config/deployment.js
const config = {
    production: {
      apiUrl: 'https://api.modulogica.com',
      auth0Domain: 'modulogica.auth0.com',
      auth0ClientId: 'your_client_id'
    },
    development: {
      apiUrl: 'http://localhost:5000',
      auth0Domain: 'modulogica.auth0.com',
      auth0ClientId: 'your_dev_client_id'
    }
  };