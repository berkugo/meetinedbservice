const checkinModel = require('../models/checkin')

class CheckinHandler {

    async insertNewCheckin(req, reply) {

        try {
            const result = await checkinModel.crud.insertNewCheckin(req.body)
            result ? reply.code(200).send(checkinModel.successJson("A new checkin has been inserted to the database.")) : reply.code(404).send(checkinModel.errorMessage("Unknown error."))
        }
        catch (err)
        {
            reply.code(404).send(`Database error. ${err}`)
        }
    }
    async removeCheckinById(req, reply) {

        return reply.send()
    }
    async getCheckinsByCity(req, reply) {
        if(!('city' in req.params)) return reply.code(404).send(checkinModel.errorMessage("Unknown parameter."))
        const checkins = await checkinModel.crud.getCheckinsByCity(req.params.city)
        checkins ? reply.send(checkinModel.successJson(checkins)) :
            reply.code(404).send(checkinModel.errorMessage("Unknown error!"))
    }
    async getUserCheckinByID(req, reply)
    {
        try
        {
            if(!('id' in req.params)) return reply.code(404).send(checkinModel.errorMessage("Unknown parameter."))
            const result = await checkinModel.crud.getCheckinByUserID(req.params.id)
            result ? reply.send(checkinModel.successJson(result)) :
                reply.code(404).send(checkinModel.errorMessage("Unknown error!"))

        }
        catch (err)
        {
            reply.code(404).send(checkinModel.errorMessage("Database error!"))
        }
    }
    setHandlers(app, opts, next) {
        app.post("/add", { schema: checkinModel.schema }, this.insertNewCheckin.bind(this))
        app.get("/get/:id", this.getUserCheckinByID.bind(this))
        app.get("/get/university/:city", this.getCheckinsByCity.bind(this))
        next()
    }
}

module.exports = new CheckinHandler()