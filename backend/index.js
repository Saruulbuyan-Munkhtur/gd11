// Import the pg module
const { Pool } = require('pg');

// Create a new pool using your PostgreSQL RDS credentials
const pool = new Pool({
  user: process.env.RDS_USERNAME,
  database: process.env.RDS_DATABASE_NAME,
  password: process.env.RDS_MASTER_PASS,
  port: process.env.RDS_PORT, // Default port for PostgreSQL
});

// Connect to the database and run a query
pool.connect((err, client, done) => {
  if (err) throw err;
  console.log('Connected to PostgreSQL RDS!');

  client.query('SELECT NOW()', (err, res) => {
    done();

    if (err) {
      console.log(err.stack);
    } else {
      console.log(res.rows[0]);
    }

    // Close the pool to end the session
    pool.end();
  });
});
