require('dotenv').config()
const settings =
{
    host: process.env.DB_ADDRESS,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,

}
const connectionString = `postgres://${settings.username}:${settings.password}@${settings.host}:${settings.port}/${settings.database}`


module.exports.settings = settings
module.exports.connectionString = connectionString