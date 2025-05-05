exports.up = function(knex) {
  return knex.schema.table('todos',table =>{
 table.integer('user_id').references('id').inTable('users').onDelete('CASCADE');
  });
};


exports.down = function(knex) {
  return 
  knex.schema.table('todos',table=>{
  table.dropColumn ('user_id');
  });
};
