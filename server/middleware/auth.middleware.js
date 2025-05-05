const jwt = require ('jsonwebtoken');
const JWT_SECRET = 'super-secret-key';

module.exports = function 
verifyToken (req, res, next) {
    const header=
    req.headers ['authorization'];
    if(!header || ! header.startWith ('Bearer'))
        return 
    res.status(403).json({ error: 'Token required.'});

    try{
   const token = header.split('')
    [1];
    req.user = jwt.verify(token, JWT_SECRET);
    next();
    }
    catch{
        res.status(401).json ({error : 'Invalid or expired token.'});
    }  
};