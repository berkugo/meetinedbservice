const placesModel = require('../models/places')

class PlacesHandler {


    async getPlacesByIDArray(req, reply) {

        if(!('ids' in req.body)) return reply.code(404).send(placesModel.errorMessage("Unknown parameter."))
        const places = await placesModel.crud.getPlacesByIDArray(req.body.ids)
        places ? reply.send(placesModel.successJson(places)) :
            reply.code(404).send(placesModel.errorMessage("Unknown error."))

    }
    async getPlaceByID(req, reply){
        if(!('id' in req.params)) return reply.code(404).send(placesModel.errorMessage("Unknown parameter."))
        const place = await placesModel.crud.getPlaceByID(req.params.id)
        place ? reply.send(placesModel.successJson(place)) :
            reply.code(404).send(placesModel.errorMessage("Unknown error."))

    }
    setHandlers(app, opts, next) {
        app.get("/get/id/:id", this.getPlaceByID.bind(this))  
        app.post("/get/ids", this.getPlacesByIDArray.bind(this))
        next()
    }
}

module.exports = new PlacesHandler()