var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true });
var con= process.env.MONGODB_URI;
mongoose.connect(con,{ useNewUrlParser:true });//.then((e)=>{

// },(e)=>{
//   console.log("i'm here",e);
// });




module.exports = {mongoose};
