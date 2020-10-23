
exports.up = function(knex, Promise) {
    return Promise.resolve(knex.schema.createTable('checkins',  (table) => {
        table.increments('id').primary().unique();
        table.string('uid', 255).notNullable();
        table.string('placeid', 255).notNullable();
        table.integer('ctype', 255).notNullable();
        table.string("note", 255).notNullable()

    }))
};

exports.down = function(knex) {
    return knex.schema.dropTable('checkins');

};
