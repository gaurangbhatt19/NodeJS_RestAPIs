const {createPool} = require('mysql')

const db= createPool({
    port: 3306,
    host:"localhost",
    user:"nodejs_user",
    password:"nodejs_user@123",
    database:"heroku_12f1937794459fe",
    connectionLimit:20
})

modules.export= db;