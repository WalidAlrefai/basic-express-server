'use strict';

// function validator (req,res,next){
//     let name = req.query.name;
//     console.log(name);
//     if(name != null){
//         next()
//     }else{
//         next('route')
//     }
// }

// module.exports = validator()



function validator(req, res, next) {
    const name = req.query.name;

    if (name) {
        next();
    } else {
        next("there is no query")
    }
}

module.exports = validator;