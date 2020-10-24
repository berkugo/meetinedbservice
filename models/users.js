const settings = require('../bin/knexfile')
const dbManager = require('knex')(settings.development)
const tableName = 'userdata'

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
        getUserByID: async (userid) => {
            const result = await dbManager.raw(`SELECT * FROM ${tableName} WHERE data ->> 'enc' = 'KNQWY5DFMRPV6BZ76S25SCCA5J7YJSQ%3D'`)
            if (result)
                return Promise.resolve(result)
            else
                return Promise.resolve(false)

        },
       /* getUsersByIDS: async (idArray) => {

            const result = await dbManager(tableName).select().whereRaw('uid', idArray)
            if (result)
                return Promise.resolve(result)
            else
                return Promise.resolve(false)
        } */

    }
}