import path from 'path';

module.exports = {
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite')
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  },
  useNullAsDefault: true,
};


//yarn knex

//como criar tabelas com o knex
//1° criar tabela dentro das migrations
//2° yarn knex:migrate
//yarn knex:migrate:rollback