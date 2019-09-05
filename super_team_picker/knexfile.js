// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 
      `postres://postgres:diddldidhd43*@localhost/super_team`
  },
  migration: {
    directory: "./db/migrations"
  }
};
