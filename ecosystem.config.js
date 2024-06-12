module.exports = {
  apps: [
    {
      name: 'myapp',
      script: './dist/server.js',
      ignore: ['./node_modules'],
      watch: true,
      instances: 4,
      exec_mode: 'cluster',
      env: {
        PORT: 3000,
        NODE_ENV: 'development',
      },
      env_production: {
        PORT: 7500,
        NODE_ENV: 'production',
      },
    },
  ],
}
