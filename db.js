const  {Pool} = require("pg");

const pool = new Pool({
    user:"postgres",
    host:"localhost",
    database:"redbus_db",
    password:"3511",
    port:5432,
    max:20
})

module.exports = pool;