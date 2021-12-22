const {pool} = require('./db');

let query = 'INSERT INTO test(name, country) VALUES($1, $2) RETURNING *';
let values = ['sar', 'ind'];

async function queryToServer(){
    const client = await pool.connect();
    try {
        let res = await client.query(query, values);
        console.log(res.rows[0]);
        client.release();
    } catch (error) {
        console.log(error);
    }
}

queryToServer()
pool.end()