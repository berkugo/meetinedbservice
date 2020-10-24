const app = require('fastify')({ logger: true })
const checkinRoute = require('./routes/checkin.js')
const settings = require('./bin/knexfile')
const dbManager = require('knex')(settings.development)


app.addContentTypeParser('application/json', { parseAs: 'string' }, function (req, body, done) {
    try {
        const json = JSON.parse(body)
        done(null, json)
    } catch (err) {
        err.statusCode = 400
        done(err, undefined)
    }
})

app.register(checkinRoute.setHandlers.bind(checkinRoute), { prefix: "/checkin" })
//app.register(placesRoute.setHandlers.bind(placesRoute), { prefix: "/places" }) // example






// Run the server!
app.listen(3000, async (err, address) => {

        if(!err) {
            const connection = await dbManager.select().from('knex_migrations')
            if(connection.length < 0){
                    app.log.error("Database connection problem.")
                    return process.exit(1)
            }
            return app.log.info('Connected to Meetine database.')
        }
        else {
            app.log.error(err)
            return process.exit(1)
        }

})