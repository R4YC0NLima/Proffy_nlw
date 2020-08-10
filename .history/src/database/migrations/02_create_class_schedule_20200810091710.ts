import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('class_schedule', table => {
        table.increments('id').primary();
        table.integer('user_id').unsigned()
        table.integer('week_day').notNullable();
        table.integer('from').notNullable();
        table.integer('to').notNullable();

        table.foreign('user_id')
            .references('id')
            .inTable('users')
            // .notNullable()
            .onDelete('CASCADE')
            .onUpdate('CASCADE')

    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('class_schedule');
}