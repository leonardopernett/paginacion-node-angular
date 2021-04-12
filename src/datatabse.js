const mysql = require('mysql2/promise')


function connection(){
  const pool = mysql.createPool({
    host:'localhost',
    database:'pagination',
    user:'root',
    password:'',
 })
 console.log('db is connected')
 return pool
 
}

module.exports = { connection }