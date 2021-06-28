import { createPool } from 'mysql2/promise'

console.log(`process.env.db_mysql_user`, process.env.db_mysql_user)

export default createPool({
  host: process.env.db_mysql_host,
  user: process.env.db_mysql_user,
  password: process.env.db_mysql_password,
  database: process.env.db_mysql_database,
  decimalNumbers: true
})
