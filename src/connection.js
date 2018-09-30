const mongoose=require("mongoose");

//ES6 Promises
mongoose.Promise = global.Promise;

//Connect to the databse before the test run
before(function(done){
//connect to mongoose
mongoose.connect('mongodb://localhost/testaroo');
mongoose.connection.once('open', function(){
    console.log('Connection has been made, now make fireworks...');
    done();
}).on('error', function(error){
    console.log('Connection error:', error);
});
});





