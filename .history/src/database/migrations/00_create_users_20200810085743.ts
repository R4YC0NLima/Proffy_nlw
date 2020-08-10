import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('users', table => {

    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('users');
}