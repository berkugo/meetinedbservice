const usersModel = require('../models/users')

class UsersHandler {


    async getUsersByIDS(req, reply) {

        if(!('ids' in req.body)) return reply.code(404).send(usersModel.errorMessage("Unknown parameter."))
        const places = await usersModel.crud.getUsersByIDS(req.body.ids)
        places ? reply.send(usersModel.successJson(places)) :
            reply.code(404).send(usersModel.errorMessage("Unknown error."))

    }
    async getUserByID(req, reply){
        if(!('uid' in req.body)) return reply.code(404).send(usersModel.errorMessage("Unknown parameter."))
        const place = await usersModel.crud.getUserByID(req.body.uid)
        place ? reply.send(usersModel.successJson(place)) :
            reply.code(404).send(usersModel.errorMessage("Unknown error."))

    }
    setHandlers(app, opts, next) {
        app.post("/get", this.getUserByID.bind(this))
       // will be checked later // app.post("/getmany", this.getUsersByIDS.bind(this))
        next()
    }
}

module.exports = new UsersHandler()