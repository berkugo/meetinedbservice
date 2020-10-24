const settings = require('../bin/knexfile')
const dbManager = require('knex')(settings.development)
const tableName = 'places'

module.exports = {

    successJson: (data) => {
        return {status: 200, message: { result: data }}
    },
    errorMessage: (message) => {
        return {status: 404, message: message}
    },
    crud: {
       /* insertNewPlace: (data) => {
            return dbManager(tableName).insert({a: 5}).then(result => {
                if(result)
                    return true;
                else
                    return false;
            })
        }, */
        getPlaceByID: async (placeid) => {
            const result = await dbManager(tableName).select().where('id', placeid)
            if (result)
                return Promise.resolve(result)
            else
                return Promise.resolve(false)

        },
        getPlacesByIDArray: async (idArray) => {

            const result = await dbManager(tableName).select().whereIn('id', idArray)
            if (result)
                return Promise.resolve(result)
            else
                return Promise.resolve(false)
        }

    }
}