const Pool = require('pg').Pool

const connection = new Pool({
    user: 'dbaccess',
    host: 'localhost',
    database: 'localhostess3000',
    password: 'youshallnotpass!',
    port: 5432,
})
module.exports = connection;