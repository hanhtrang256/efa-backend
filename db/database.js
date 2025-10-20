// Loading and initializing the library
const pgp = require('pg-promise')();

// Connection details
const connString = 'postgresql://neondb_owner:npg_NM8dXIQrFn9i@ep-solitary-voice-ae4t4gpr-pooler.c-2.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require';

// Creating a new database instance
const db = pgp(connString);

// Exporting the database object 
module.exports = db;