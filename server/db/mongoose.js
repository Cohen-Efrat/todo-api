var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true });

mongoose.connect('mongodb://admin:qwerty123@ds211865.mlab.com:11865/todo_app',{ useNewUrlParser: true }).then((e)=>{

},(e)=>{
  console.log(e);
});


module.exports = {mongoose};
