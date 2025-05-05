const express = require ('express');
const app = express();
requie ('dotenv').config();

const authRoutes = require('./routes/auth.routes');
const todosRoutes = require('./routes/todos.routes');

app.use (express.json());
app.use('/.auth',authRoutes);
app.use('/todos', todosRoutes);

app.get('/favicon.ico' ,(req, res)=> res.sendStatus(204));

const port = process.env.PORT || 5000;
const server = app.listen(port , ()=> console.log('Listening on port${port}'));
module.exports = app;