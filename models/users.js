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
            const result = await dbManager.raw(`SELECT * FROM ${tableName} WHERE data ->> 'enc' = '${userid}'`)
            if (result)
                return Promise.resolve(result)
            else
                return Promise.resolve(false)

        },
        getUsersByIDS: async (idArray) => {

            const result = await dbManager.raw(`SELECT * FROM ${tableName} WHERE data ->> 'enc' in '${idArray}'`)
            if (result)
                return Promise.resolve(result)
            else
                return Promise.resolve(false)
        }

    }
}