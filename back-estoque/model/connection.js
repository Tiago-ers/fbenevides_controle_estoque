const mysql = require('@mysql/xdevapi');

const connectionDB = {
  host: 'localhost',
  user: 'root',
  password: 'root',
  port: 33060,
  socketPath: '/var/run/mysqld/mysqld.sock',
};

let schema;

const connection = async () => {
  if (schema) return Promise.resolve(schema);
  try {
    const session = await mysql.getSession(connectionDB);
    schema = await session.getSchema('controle_estoque');
    return schema;
  } catch (error) {
    return process.exit(1);
  }
};

module.exports = connection;
