const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const knex = require('../database/knex');
const JWT_Secret = 'super-secret-key';

exports.register = async (req, res)=> {
   const { name, email , password } = req.body;
   if (!name || !email || !password) return
   res.status(400).json({error: 'All fields are required.'});

   const hashed = await 
   bcrypt.hash (password, 10);
   const [user] = await
   knex('users').insert({ name, email,password: hashed}).returning (['id','name','email']);

   res.status(201).json ({user}); };

   exports.login = async (req,res) =>
   {

    const { email, password} = 
    req.body;
    const user = await 
    knex('user').where ({email}).first();
    if (!user || !(await bcrypt.compare(password,user.password)))
        return 
    res.status(401).json({error:'Invalid Credentials.'});
    const token = jwt.sign({userId:user.id},JWT_SECRET,{expiresIn: '2h'});

    res.json({message:'Login successful',token});
   };

   exports.getMe = async (req,res) => {
   const user = await knex('users').where ({ id: req.user.userId}).first().select('id', 'name', email);
   if (!user) return
   res.status(404).json({ error: 'Not found'});
   res.json(user);

   };

