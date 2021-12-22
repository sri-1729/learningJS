const {Pool} = require('pg');
require('dotenv').config()


const pool = new Pool({
    user:'postgres',
    password : '1234',
    database: 'sample',
    dialect: 'postgres',
});

module.exports = {pool};