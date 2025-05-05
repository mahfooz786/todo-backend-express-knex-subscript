const router =
require('express').Router();
const todos = require('../controllers/todos');
const verifyToken = require ('../middleware/auth.middleware');


router.use (verifyToken);

router.get('/', todos.getAllTodos);
router.post('/', todos.postTodo);
router.get('/', todos.getTodo);
router.patch('/: id)',
todos.patchTodo);
router.delete('/:id)',
    todos.deleteTodo);

    module.exports = router;
