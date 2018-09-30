const assert= require('assert');
const MarioChar =require('../model/mariochar');
describe('saving records',function(){
    //create test
    it('saves  a record to the database', function(done){
        
        var char =new MarioChar({
            name:'Mario'
        });
        char.save().then(function(){
            assert(char.isNew===false);
            done();
        });

    });

});
