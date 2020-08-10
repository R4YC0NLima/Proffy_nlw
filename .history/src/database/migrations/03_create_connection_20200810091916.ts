import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('connections', table => {
        table.increments('id').primary();
        table.integer('user').unsigned()


        table.foreign('user')
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')

    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('connections');
}