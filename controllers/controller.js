const jwt = require('jsonwebtoken'); 
const secret = "1234abcABC";
const {auth} = require('../middlewares/middleware.js');

let loginController = async (req, res) => {
   
    const { email, password } = req.body;


    var token = jwt.sign({ email: email, password: password }, secret); 


    req.headers['authorization'] = `Bearer ${token}`; 

    auth(req, res, () => {
      
        if (email === req.user.email && password === req.user.password) {
            return res.status(200).json({
                message: "Verified",
                token: token 
            });
        } else {
            return res.status(401).json({
                message: "Verification failed"
            });
        }
    });
};

module.exports = {
    loginController
};