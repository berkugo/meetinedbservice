const settings =
{
    host: "localhost",
    port: "5432",
    username: "postgres",
    password: "lmao",
    database: "meetine",
}
const connectionString = `postgres://${settings.username}:${settings.password}@${settings.host}:${settings.port}/${settings.database}`


module.exports.settings = settings
module.exports.connectionString = connectionString