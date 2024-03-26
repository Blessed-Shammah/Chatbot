module.exports = {
    host: 'localhost', // the host of the database
    user: 'root', // the username for the database
    password: '', // the password for the database
    database: 'student_assistant', // the name of the database
    port: 3306, // the port to use for the connection (default is 3306)
    connectionLimit: 3, // the maximum number of connections to create at once (default is 3)
    waitForConnections: true, // whether or not to wait for a connection to become available (default is true)
  };