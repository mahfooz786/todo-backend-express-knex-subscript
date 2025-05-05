const router = 
require('express').Router();
const auth = require('../controllers/auth.controller');
const verifyToken = require('../middleware/auth.middleware');

router.post('/register',auth.register);
router.post('/login, auth.login');
router.get('/me', verifyToken, auth.getMe);

module.exports= router;

