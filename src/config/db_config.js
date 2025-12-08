import dotenv from "dotenv";
import pkg from 'pg';

dotenv.config();

const { Pool } = pkg;

export const pool = new Pool({
  connectionString: process.env.DB_URL,
  max: 15
});

try {
    const client = await pool.connect();
    console.log('DB connection established!');
    client.release(); // very important
} catch (err) {
    console.log('DB connection failed: ', err);
    process.exit(1); // fail fast
}