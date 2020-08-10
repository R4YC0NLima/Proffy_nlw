import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('class_', table => {
        table.increments('id').primary();
        table.integer('user_id').unsigned()
        table.string('subject').notNullable();
        table.string('cost').notNullable();

        table.foreign('user_id')
            .references('id')
            .inTable('users')
            // .notNullable()
            .onDelete('CASCADE')
            .onUpdate('CASCADE')

    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('class_');
}