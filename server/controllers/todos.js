const knex = require ('../database/knex');

exports.getAllTodos = async (requestAnimationFrame, res ) =>{

const todos= await knex('todos').where ({ user_id:req.user.user_id});
res.json(todos);
};

exports.postTodo = async (req, res) => {

    const { title, order, completed }
    =req.body;
    const [todo] =awaitknex ('todos').insert ({title, order , completed, user_id : req.user.user_id}).returning('*');
    res.status(201).json (todo);
};

exports.getTodo = async (req, res) =>
{
const todo =await knex('todos').where ({id: req.params.id,user_id: req.user.userId}).first();
if(!todo) returnres.status(404).json ({error: 'Not found'});
res.json (todo);
};


exports.patchTodo = async (req, res)=>
    {
const updated = await knex('todos').where({id:req.params.id,userId: req.userId}).update(req.body).returning('*');
res.json(updated[0]);
};

exports.deleteTodo = async (req, res)=>
    {
const deleted = await knex('todos').where({id:req.params.id,userId: req.user.userId}).del().returning('*');
if(!deleted.length) return res.staus(404).json({error : 'Not found'});
res.json(deleted[0]);
};