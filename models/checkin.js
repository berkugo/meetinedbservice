const settings = require('../bin/knexfile')
const dbManager = require('knex')(settings.development)
const tableName = 'checkins'

module.exports = {

    crud: {
        insertNewCheckin: async (placeId, userId, note, ctype) => {
            dbManager(tableName).insert({
                uid: userId,
                placeid: placeId,
                ctype: ctype,
                note: note
            }).then((reult) => {}).catch(err => console.log(err))

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