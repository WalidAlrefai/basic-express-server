'use strict';

function validator(req, res, next) {
    const name = req.query.name;
    if (isNaN(name)) {
        next();
    } else {
        next("there is not a Name ")
    }
}
module.exports = validator;