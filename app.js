const app = require('fastify')({ logger: true })
const checkinRoute = require('./routes/checkin.js')
const placesRoute = require('./routes/places.js')
const usersRoute = require('./routes/users.js')


app.addContentTypeParser('application/json', { parseAs: 'string' },  (req, body, done) => {
    try {
        const json = JSON.parse(body)
        done(null, json)
    } catch (err) {
        err.statusCode = 400
        done(err, undefined)
    }
})

app.register(checkinRoute.setHandlers.bind(checkinRoute), { prefix: "/checkin" })
app.register(placesRoute.setHandlers.bind(placesRoute), { prefix: "/places" })
app.register(usersRoute.setHandlers.bind(usersRoute), { prefix: "/users" })







// Run the server!
app.listen(process.env.SERVICE_PORT, async (err, address) => {

        if(!err) {

            return app.log.info('Connected to Meetine database.')
        }
        else {
            app.log.error(err)
            return process.exit(1)
        }

})