const checkinModel = require('../models/checkin')

class CheckinHandler {

    async insertNewCheckin(req, reply) {

        try
        {
            const result = await checkinModel.crud.insertNewCheckin(req.body)
            if(result)
                reply.code(200).send("A new checkin has been inserted to the database.")
            else
                reply.code(404).send("Unknown error.")
        }
        catch (err)
        {
            reply.code(404).send("Database error.")
        }
    }
    async removeCheckinById(req, reply) {

        return reply.send()
    }
    async getUserByID(req, reply)
    {
        try
        {
            const result = await checkinModel.crud.getCheckinByUserID(req.params)
            if(result) reply.send(checkinModel.successJson(result))
            else reply.code(404).send(checkinModel.errorMessage("Unknown error!"))

        }
        catch (err)
        {
            reply.code(404).send(checkinModel.errorMessage("Database error!"))
        }
    }
    setHandlers(app, opts, next) {
        app.post("/add", { schema: checkinModel.schema }, this.insertNewCheckin.bind(this))
        app.get("/get/:id", this.getUserByID.bind(this))
        app.get("/remove/:id", this.removeCheckinById.bind(this))
        next()
    }

}

module.exports = new CheckinHandler()