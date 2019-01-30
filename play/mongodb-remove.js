const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//remove all
// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove({_id: '5c51e7f39bb372001777d15f'}).then((todo) => {
//
// });

Todo.findByIdAndRemove('5c51e7f39bb372001777d15f').then((todo) => {
  console.log(todo);
});
