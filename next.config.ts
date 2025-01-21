
// next.config.js for Dashboard (Microfrontend)
const { ModuleFederationPlugin } = require('webpack').container;
module.exports = {
  webpack: (config:any , { isServer }:any) => {
    // Apply Module Federation only for the client-side
    if (!isServer) {
      config.plugins.push(
        new ModuleFederationPlugin({
          name: 'dashboard',
          filename: 'remoteEntry.js',
          exposes: {
            './Dashboard': './pages/index.js', // Exposing the Dashboard component
          },
          shared: ['react', 'react-dom'], // Sharing common dependencies
        })
      );
    }
    return config;
  },
};

