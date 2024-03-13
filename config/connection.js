const mysql = require('mysql2');
require('dotenv').config();

// Create a connection pool
const pool = mysql.createPool({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: process.env.PASSWORD,
    database: 'employee_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Get a connection from the pool
const db = pool.promise();

// Export the pool
module.exports = db;
