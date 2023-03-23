exports.up = (knex) =>
  knex.schema
    .createTable('offices', (table) => {
      table.increments('id').primary();
      table.string('name');
      table.timestamps(true, true, true);
      table.jsonb('address');
    })
    .createTable('managers', (table) => {
      table.increments('id').primary();

      table.string('firstName');
      table.string('lastName');
      table.integer('age');
      table.timestamps(true, true, true);
      table.integer('officeId').unsigned().references('id').inTable('offices').onDelete('CASCADE').index();
    });

exports.down = (knex) => knex.schema.dropTableIfExists('managers').dropTableIfExists('offices');
