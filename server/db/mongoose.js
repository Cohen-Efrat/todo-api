var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true });

mongoose.connect('mongodb://<efrat_c>:<ec1992ec>@ds211865.mlab.com:11865/todo_app' || 'mongodb://localhost:27017/TodoApp').then((a)=>{
  console.log(a);
  ,(e)=>{
    console.log(e);
  }
});


module.exports = {mongoose};
