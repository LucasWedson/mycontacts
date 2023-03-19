const {Client} = require ('pg');

const client = new Client({
  hots: 'localhost',
  port: 5432,
  user: 'root',
  password: 'root',
  database: 'mycontacts',
});

client.connect();
