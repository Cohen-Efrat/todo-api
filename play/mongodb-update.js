//const MongoClient= require('mongodb').MongoClient;
const {MongoClient,ObjectID}= require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(err,client)=>{
  if(err){
    return console.log('enable to connect to the db');
  }
  console.log('connected to mongo db');

  const db= client.db('TodoApp');
//   db.collection('Todos').findOneAndUpdate({
//     _id:new ObjectID("5c389e2ff9e76c049cabd80d")
//   },{
//     $set:{
//       completed: true
//     }
//   },{
//     returnOriginal:false
//   }
//
// ).then((res)=>{
//   console.log(res);
// });

db.collection('Users').findOneAndUpdate({
  _id:new ObjectID("5c3874b2e6c11b21746abd54")
},{
  $set:{name: 'efrat'},
    $inc:{age:-3}
},{
  returnOriginal:false
}

).then((res)=>{
console.log(res);
});



  // client.close();
});
