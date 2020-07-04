module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: env('DATABASE_URI') && env('DATABASE_URI'),
        database: env('DATABASE_NAME')
      },
      options: {
        ssl: true,
      },
    },
  },
});

console.log(env('DATABASE_URI'), env('DATABASE_NAME'));