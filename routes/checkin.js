const checkinModel = require('../models/checkin')

class CheckinHandler {

    async insertNewCheckin(req, reply) {

        const result = await checkinModel.crud.insertNewCheckin('afdaf', 'adfaf', 'adfdaf', 1)
        return reply.send(checkinModel.crud.getCheckinByUserID('adfaf'))
    }   

    async removeCheckinById(req, reply) {

        return reply.send(req.query)
    }

    setHandlers(app, opts, next) {

        app.get("/add", this.insertNewCheckin)
        app.get("/remove/:id", this.removeCheckinById)
        next()

    }




}

module.exports = new CheckinHandler()