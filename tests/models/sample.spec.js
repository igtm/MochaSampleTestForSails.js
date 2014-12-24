/**
 * Created by Tomokatsu on 14/12/24.
 */
var Sample = require('../../api/models/Sample.js');
describe('SampleModel',function(){
   describe('#beforeCreate',function(){
       it('should make a password encrypted',function(done){
           var passwordBeforeEncrypted = 'sample';
           Sample.beforeCreate({
               password: passwordBeforeEncrypted
           },function(e, sample){
               expect(sample.password).to.equal(passwordBeforeEncrypted);
           });

           done();
       });
   });
});