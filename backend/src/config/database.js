require('dotenv').config();
const { Pool } = require('pg');

// Create a pool using your database information.
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Function to connect to the PostgreSQL database
async function connect() {
	try {
	  await pool.connect();
	  console.log('Connected to the database!');
	} catch (error) {
	  console.error('Error connecting to the database:', error.message);
	}
}

const query = (text, params, callback) => {
	return pool.query(text, params, callback);
      };
      
module.exports = { connect, query };
