const app = require('fastify')({ logger: true })

const checkinRoute = require('./routes/checkin.js')
app.register(checkinRoute.setHandlers.bind(checkinRoute), { prefix: "/checkin" })
//app.register(placesRoute.setHandlers.bind(placesRoute), { prefix: "/places" }) // example


// Run the server!
app.listen(3000, function (err, address) {
    if (err) {
        app.log.error(err)
        process.exit(1)
    }
})