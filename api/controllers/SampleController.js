/**
 * SampleController
 *
 * @description :: Server-side logic for managing samples
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	sample: function(req, res, next){
        return res.json({test: true});
    }
};

