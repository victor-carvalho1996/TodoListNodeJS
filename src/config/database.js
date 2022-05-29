const mysql = require('mysql2');
const conn = mysql.createConnection({
 host: "localhost",
 user: "root",
 password: "123456",
 database: "todo-app",
 port: 3306
});

conn.connect();

module.exports = conn;