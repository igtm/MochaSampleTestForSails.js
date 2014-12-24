/**
 * Created by Tomokatsu on 14/12/24.
 */
var SampleController = require('../../../api/controllers/SampleController.js');
describe('SampleController',function(){
    describe('#sample',function(){
        it('should return json',function(done){
            var spy = sinon.spy();
            SampleController.sample(null,{json:spy});
            expect(spy.calledWith({test:true})).to.be.true;
            done();
        });
    });
});