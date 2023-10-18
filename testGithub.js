const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'your-database-host', // Replace with your database host
  user: 'your-username',      // Replace with your database username
  password: 'your-password',  // Replace with your database password
  database: 'your-database'   // Replace with your database name
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ' + err.stack);
    return;
  }
  console.log('Connected to the database as ID ' + connection.threadId);
});

// Export the connection for use in other modules
module.exports = connection;
// Export the connection for use in other modules
