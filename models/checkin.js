const settings = require('../bin/knexfile')
const dbManager = require('knex')(settings.development)
const tableName = 'checkins'

module.exports = {

    schema: {
        body: {
            type: 'object',
            properties: {
                uid: {type: 'string'},
                placeid: {type: 'string'},
                ctype: {type: 'integer'},
                note: {type: 'string'},
            },
            required: ['uid', 'placeid', 'ctype', 'note']

        }

    },
    successJson: (data) => {
        return {status: 200, message: { result: data }}
    },
    errorMessage: (message) => {
        return {status: 404, message: message}
    },
    crud: {
        insertNewCheckin: (data) => {
            return dbManager(tableName).insert({a: 5}).then(result => {
                if(result)
                        return true;
                    else
                        return false;
            })
        },
        getCheckinByUserID: async (userid) => {
            const result = await dbManager(tableName).select().where('uid', userid)
            if (result)
                return Promise.resolve(result)
            else
                return Promise.resolve(false)

        },
        removeCheckinById: async (userid) => {
            const result = await dbManager(tableName).delete().where('uid', userid)
            if (result)
                return Promise.resolve(result)
            else
                return Promise.resolve(false)

        }


    }
}