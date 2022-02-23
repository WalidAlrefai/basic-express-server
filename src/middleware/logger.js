'use strict';

const logger = (req,res,next) =>{
    req.path = 'Razan';
    req.reqType = req.method;
    next();
}

module.exports = logger;