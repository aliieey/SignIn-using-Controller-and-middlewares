const jwt = require('jsonwebtoken'); 
const secret = "1234abcABC";

let auth = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; 
    
    if (!token) {
        return res.status(403).json({ message: "No token provided" });
    }

    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            return res.status(400).json({ message: "Invalid Token" });
        }
        
        req.user = decoded;
        next(); 
    });
};

module.exports = {auth};