const Pool = require('pg').Pool;

const pool = new Pool({
    user:'postgres',
    password:'Raisul999',
    database:'blogs',
    host:'localhost',
    port:'5432'

})

module.exports = pool;