/**
* Sample.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/
var bcrypt = require('bcrypt');
module.exports = {

  attributes: {

  },
    beforeCreate: function(values, next){
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(values.password, salt, function(err, hash) {
                if (err) {
                    console.log(err);
                    next(err);
                }else{
                    values.password = hash;
                    next(null, values);
                }
            });
        });
    }
};

