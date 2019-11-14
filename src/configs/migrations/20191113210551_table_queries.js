exports.up = async (knex) => {
  const doesTableExists = await knex.schema.hasTable('queries');
  if (!doesTableExists) {
    await knex.schema.createTable('queries', (table) => {
      table.increments('id');
      table.string('query').notNullable();
      table.string('user_id').notNullable();
      table.string('channel_id').notNullable();
      table.timestamp('created_at', false).defaultTo(knex.fn.now()).notNullable();
      table.timestamp('updated_at', false).defaultTo(knex.fn.now()).notNullable();
    });
    await knex.raw('CREATE TRIGGER trigger_updated_at BEFORE UPDATE ON queries FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column()');
  }
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('queries');
  await knex.raw('DROP TRIGGER IF EXISTS trigger_updated_at ON queries');
};
